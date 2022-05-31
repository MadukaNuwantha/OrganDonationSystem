using FireSharp;
using FireSharp.Config;
using FireSharp.Interfaces;
using FireSharp.Response;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using OrganDonorSystem.Models;

namespace OrganDonorSystem.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CommentController : ControllerBase
    {
        IFirebaseClient client;

        public CommentController()
        {
            IFirebaseConfig config = new FirebaseConfig
            {
                AuthSecret = "6SM6KtsnKpU1uqitKPka1NfgC9goq8X4m3ZIQlUC",
                BasePath = "https://orgdonlk-319e4-default-rtdb.firebaseio.com/"
            };
            client = new FirebaseClient(config);
        }

        [HttpGet]
        public async Task<ActionResult> GetAll()
        {
            Dictionary<string, Comment> data = new Dictionary<string, Comment>();
            FirebaseResponse response = await client.GetAsync("commentdata");

            if (response.StatusCode == System.Net.HttpStatusCode.OK)
                data = JsonConvert.DeserializeObject<Dictionary<string, Comment>>(response.Body);

            List<Comment> result = new List<Comment>();
            foreach (KeyValuePair<string, Comment> kvp in data)
            {
                result.Add(new Comment()
                {
                    commentId = kvp.Key,
                    name = kvp.Value.name,
                    comment = kvp.Value.comment,
                    time = kvp.Value.time
                });
            }


            return Ok(result);
        }

        [HttpPost]
        public async Task<ActionResult> Post(Comment comment)
        {
            comment.commentId = "";
            comment.time = DateTime.Now;
            string IDGen = Guid.NewGuid().ToString("N");
            FirebaseResponse response = await client.SetAsync("commentdata/" + IDGen, comment);

            if (response.StatusCode == System.Net.HttpStatusCode.OK)
            {
                return Ok(response);
            }
            else
            {
                return BadRequest(response);
            }
        }

        [HttpDelete("{commentId}")]
        public async Task<ActionResult> Delete(string? commentId)
        {
            FirebaseResponse response = await client.DeleteAsync("commentdata/" + commentId);
            if (response.StatusCode == System.Net.HttpStatusCode.OK)
            {
                return Ok(response);
            }
            else
            {
                return BadRequest(response);
            }
        }
    }
}
