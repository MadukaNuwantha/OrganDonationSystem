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
    public class OrgonController : ControllerBase
    {
        IFirebaseClient client;

        public OrgonController()
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
            Dictionary<string, Organ> data = new Dictionary<string, Organ>();
            FirebaseResponse response = await client.GetAsync("organdata");

            if (response.StatusCode == System.Net.HttpStatusCode.OK)
                data = JsonConvert.DeserializeObject<Dictionary<string, Organ>>(response.Body);

            List<Organ> result = new List<Organ>();
            foreach (KeyValuePair<string, Organ> kvp in data)
            {
                result.Add(new Organ()
                {
                    organId = kvp.Key,
                    organ = kvp.Value.organ,
                    organSize = kvp.Value.organSize,
                    bloodType = kvp.Value.bloodType,
                    age = kvp.Value.age,
                    gender = kvp.Value.gender,
                    location = kvp.Value.location
                });
            }
            return Ok(result);
        }

        [HttpPost]
        public async Task<ActionResult> Post(Organ organ)
        {
            organ.organId = "";
            string IDGen = Guid.NewGuid().ToString("N");
            FirebaseResponse response = await client.SetAsync("organdata/" + IDGen, organ);

            if (response.StatusCode == System.Net.HttpStatusCode.OK)
            {
                return Ok(organ);
            }
            else
            {
                return BadRequest(response);
            }
        }
    }
}
