using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using FireSharp;
using FireSharp.Config;
using FireSharp.Interfaces;
using FireSharp.Response;
using OrganDonorSystem.Models;
using Newtonsoft.Json;

namespace OrganDonorSystem.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AdminController : ControllerBase
    {
        IFirebaseClient client;

        public AdminController()
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
            Dictionary<string, Admin> data = new Dictionary<string, Admin>();
            FirebaseResponse response = await client.GetAsync("admindata");

            if(response.StatusCode == System.Net.HttpStatusCode.OK)
                data = JsonConvert.DeserializeObject<Dictionary<string, Admin>>(response.Body);

            List<Admin> result = new List<Admin>();
            foreach(KeyValuePair<string, Admin> kvp in data)
            {
                result.Add(new Admin()
                {
                    adminID = kvp.Key,
                    userName = kvp.Value.userName,
                    nic = kvp.Value.nic,
                    password = kvp.Value.password,
                    organization = kvp.Value.organization
                });
            }
            return Ok(result);
        }

        [HttpGet("{idnumber}")]
        public async Task<ActionResult> GetOnce(string idnumber)
        {
            FirebaseResponse response = await client.GetAsync("admindata/" + idnumber);
            if (response.StatusCode == System.Net.HttpStatusCode.OK)
            {
                return Ok(response);
            }
            else
            {
                return BadRequest(response);
            }
        }

        [HttpPost]
        public async Task<ActionResult> Post(Admin admin)
        {
            string IDGen = Guid.NewGuid().ToString("N");
            FirebaseResponse response = await client.SetAsync("admindata/" + IDGen, admin);

            if(response.StatusCode == System.Net.HttpStatusCode.OK)
            {
                return Ok(response);
            }
            else
            {
                return BadRequest(response);
            }
        }

        [HttpPut]
        public async Task<ActionResult> Update(Admin admin)
        {
            string idnumber = admin.adminID;
            admin.adminID = "";
            FirebaseResponse response = await client.SetAsync("admindata/" + idnumber, admin);

            if (response.StatusCode == System.Net.HttpStatusCode.OK)
            {
                return Ok(response);
            }
            else
            {
                return BadRequest(response);
            }
        }

        [HttpDelete]
        public async Task<ActionResult> Delete(string idnumber)
        {
            FirebaseResponse response = await client.DeleteAsync("admindata/" + idnumber);
            if (response.StatusCode == System.Net.HttpStatusCode.OK)
            {
                return Ok(response);
            }
            else
            {
                return BadRequest(response);
            }
        }



        //Login
        [HttpPost("login")]
        public async Task<ActionResult> Login(Login login)
        {
            Dictionary<string, Admin> data = new Dictionary<string, Admin>();
            FirebaseResponse response = await client.GetAsync("admindata");

            if (response.StatusCode == System.Net.HttpStatusCode.OK)
                data = JsonConvert.DeserializeObject<Dictionary<string, Admin>>(response.Body);

            List<Admin> result = new List<Admin>();
            foreach (KeyValuePair<string, Admin> kvp in data)
            {
                result.Add(new Admin()
                {
                    adminID = kvp.Key,
                    userName = kvp.Value.userName,
                    nic = kvp.Value.nic,
                    password = kvp.Value.password,
                    organization = kvp.Value.organization,
                    type = kvp.Value.type
                });
            }

            foreach (Admin ad in result)
            {
                if ((ad.userName == login.UserName) && (ad.password == login.Password))
                {
                    FirebaseResponse ret = await client.GetAsync("admindata/" + ad.adminID);
                    Admin temp = new Admin();
                    temp.adminID = ad.adminID;
                    temp.userName = ad.userName;
                    temp.organization = ad.organization;
                    temp.nic = ad.nic;
                    temp.type = ad.type;

                    return Ok(temp);
                }
            }
            return BadRequest();
        }
    }
}
