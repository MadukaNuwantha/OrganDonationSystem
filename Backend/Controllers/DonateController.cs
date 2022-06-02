using FireSharp;
using FireSharp.Config;
using FireSharp.Interfaces;
using FireSharp.Response;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using OrganDonorSystem.Models;
using System.Text;

namespace OrganDonorSystem.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DonateController : ControllerBase
    {
        IFirebaseClient client;

        public DonateController()
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
            Dictionary<string, Donate> data = new Dictionary<string, Donate>();
            FirebaseResponse response = await client.GetAsync("donatedata");

            if (response.StatusCode == System.Net.HttpStatusCode.OK)
                data = JsonConvert.DeserializeObject<Dictionary<string, Donate>>(response.Body);

            List<Donate> result = new List<Donate>();
            foreach (KeyValuePair<string, Donate> kvp in data)
            {
                result.Add(new Donate()
                {
                    donateId = kvp.Key,
                    title = kvp.Value.title,
                    firstName = kvp.Value.firstName,
                    lastName = kvp.Value.lastName,
                    middleName = kvp.Value.middleName,
                    prefferedName = kvp.Value.prefferedName,
                    dob = kvp.Value.dob,
                    gender = kvp.Value.gender,
                    nic = kvp.Value.nic,
                    addLine1 = kvp.Value.addLine1,
                    addLine2 = kvp.Value.addLine2,
                    city = kvp.Value.city,
                    province = kvp.Value.province,
                    postalCode = kvp.Value.postalCode,
                    email = kvp.Value.email,
                    telephone = kvp.Value.telephone,
                    mobile = kvp.Value.mobile,
                    prefContact = kvp.Value.prefContact,
                    donateType = kvp.Value.donateType,
                    hiv = kvp.Value.hiv,
                    asc = kvp.Value.asc,
                    diabetes = kvp.Value.diabetes,
                    kidneyDisease = kvp.Value.kidneyDisease,
                    heartDisease = kvp.Value.heartDisease,
                    none = kvp.Value.none
                });
            }
            return Ok(result);
        }

        [HttpGet("{idnumber}")]
        public async Task<ActionResult> GetOnce(string idnumber)
        {
            Dictionary<string, Donate> data = new Dictionary<string, Donate>();
            FirebaseResponse response = await client.GetAsync("donatedata");

            if (response.StatusCode == System.Net.HttpStatusCode.OK)
                data = JsonConvert.DeserializeObject<Dictionary<string, Donate>>(response.Body);

            List<Donate> result = new List<Donate>();
            foreach (KeyValuePair<string, Donate> kvp in data)
            {
                result.Add(new Donate()
                {
                    donateId = kvp.Key,
                    title = kvp.Value.title,
                    firstName = kvp.Value.firstName,
                    lastName = kvp.Value.lastName,
                    middleName = kvp.Value.middleName,
                    prefferedName = kvp.Value.prefferedName,
                    dob = kvp.Value.dob,
                    gender = kvp.Value.gender,
                    nic = kvp.Value.nic,
                    addLine1 = kvp.Value.addLine1,
                    addLine2 = kvp.Value.addLine2,
                    city = kvp.Value.city,
                    province = kvp.Value.province,
                    postalCode = kvp.Value.postalCode,
                    email = kvp.Value.email,
                    telephone = kvp.Value.telephone,
                    mobile = kvp.Value.mobile,
                    prefContact = kvp.Value.prefContact,
                    donateType = kvp.Value.donateType,
                    hiv = kvp.Value.hiv,
                    asc = kvp.Value.asc,
                    diabetes = kvp.Value.diabetes,
                    kidneyDisease = kvp.Value.kidneyDisease,
                    heartDisease = kvp.Value.heartDisease,
                    none = kvp.Value.none
                });
            }
            Donate don = new Donate();
            foreach (Donate donate in result)
            {
                if (donate.donateId == idnumber)
                {
                    don.donateId = donate.donateId;
                    don.title = donate.title;
                    don.firstName = donate.firstName;
                    don.lastName = donate.lastName;
                    don.middleName = donate.middleName;
                    don.prefferedName = donate.prefferedName;
                    don.dob = donate.dob;
                    don.gender = donate.gender;
                    don.nic = donate.nic;
                    don.addLine1 = donate.addLine1;
                    don.addLine2 = donate.addLine2;
                    don.city = donate.city;
                    don.province = donate.province;
                    don.postalCode = donate.postalCode;
                    don.email = donate.email;
                    don.telephone = donate.telephone;
                    don.mobile = donate.mobile;
                    don.prefContact = donate.prefContact;
                    don.donateType = donate.donateType;
                    don.hiv = donate.hiv;
                    don.asc = donate.asc;
                    don.diabetes = donate.diabetes;
                    don.kidneyDisease = donate.kidneyDisease;
                    don.heartDisease = donate.heartDisease;
                    don.none = donate.none;
                }
            }
            return Ok(don);
        }

        [HttpPost]
        public async Task<ActionResult> Post(Donate donate1)
        {
            donate1.donateId = "";
            string IDGen = Guid.NewGuid().ToString("N");
            FirebaseResponse response = await client.SetAsync("donatedata/" + IDGen, donate1);

            if (response.StatusCode == System.Net.HttpStatusCode.OK)
            {
                Dictionary<string, Donate> data = new Dictionary<string, Donate>();
                FirebaseResponse resp = await client.GetAsync("donatedata");

                if (resp.StatusCode == System.Net.HttpStatusCode.OK)
                    data = JsonConvert.DeserializeObject<Dictionary<string, Donate>>(resp.Body);

                List<Donate> result = new List<Donate>();
                foreach (KeyValuePair<string, Donate> kvp in data)
                {
                    result.Add(new Donate()
                    {
                        donateId = kvp.Key,
                        title = kvp.Value.title,
                        firstName = kvp.Value.firstName,
                        lastName = kvp.Value.lastName,
                        middleName = kvp.Value.middleName,
                        prefferedName = kvp.Value.prefferedName,
                        dob = kvp.Value.dob,
                        gender = kvp.Value.gender,
                        nic = kvp.Value.nic,
                        addLine1 = kvp.Value.addLine1,
                        addLine2 = kvp.Value.addLine2,
                        city = kvp.Value.city,
                        province = kvp.Value.province,
                        postalCode = kvp.Value.postalCode,
                        email = kvp.Value.email,
                        telephone = kvp.Value.telephone,
                        mobile = kvp.Value.mobile,
                        prefContact = kvp.Value.prefContact,
                        donateType = kvp.Value.donateType,
                        hiv = kvp.Value.hiv,
                        asc = kvp.Value.asc,
                        diabetes = kvp.Value.diabetes,
                        kidneyDisease = kvp.Value.kidneyDisease,
                        heartDisease = kvp.Value.heartDisease,
                        none = kvp.Value.none
                    });
                }
                Donate don = new Donate();
                foreach (Donate donate in result)
                {
                    if (donate.donateId == IDGen)
                    {
                        don.donateId = donate.donateId;
                        don.title = donate.title;
                        don.firstName = donate.firstName;
                        don.lastName = donate.lastName;
                        don.middleName = donate.middleName;
                        don.prefferedName = donate.prefferedName;
                        don.dob = donate.dob;
                        don.gender = donate.gender;
                        don.nic = donate.nic;
                        don.addLine1 = donate.addLine1;
                        don.addLine2 = donate.addLine2;
                        don.city = donate.city;
                        don.province = donate.province;
                        don.postalCode = donate.postalCode;
                        don.email = donate.email;
                        don.telephone = donate.telephone;
                        don.mobile = donate.mobile;
                        don.prefContact = donate.prefContact;
                        don.donateType = donate.donateType;
                        don.hiv = donate.hiv;
                        don.asc = donate.asc;
                        don.diabetes = donate.diabetes;
                        don.kidneyDisease = donate.kidneyDisease;
                        don.heartDisease = donate.heartDisease;
                        don.none = donate.none;
                    }
                }
                return Ok(don);
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
            Dictionary<string, Donate> data = new Dictionary<string, Donate>();
            FirebaseResponse response = await client.GetAsync("donatedata");

            if (response.StatusCode == System.Net.HttpStatusCode.OK)
                data = JsonConvert.DeserializeObject<Dictionary<string, Donate>>(response.Body);

            List<Donate> result = new List<Donate>();
            foreach (KeyValuePair<string, Donate> kvp in data)
            {
                result.Add(new Donate()
                {
                    donateId = kvp.Key,
                    title = kvp.Value.title,
                    firstName = kvp.Value.firstName,
                    lastName = kvp.Value.lastName,
                    middleName = kvp.Value.middleName,
                    prefferedName = kvp.Value.prefferedName,
                    dob = kvp.Value.dob,
                    gender = kvp.Value.gender,
                    nic = kvp.Value.nic,
                    addLine1 = kvp.Value.addLine1,
                    addLine2 = kvp.Value.addLine2,
                    city = kvp.Value.city,
                    province = kvp.Value.province,
                    postalCode = kvp.Value.postalCode,
                    email = kvp.Value.email,
                    telephone = kvp.Value.telephone,
                    mobile = kvp.Value.mobile,
                    prefContact = kvp.Value.prefContact,
                    donateType = kvp.Value.donateType,
                    hiv = kvp.Value.hiv,
                    asc = kvp.Value.asc,
                    diabetes = kvp.Value.diabetes,
                    kidneyDisease = kvp.Value.kidneyDisease,
                    heartDisease = kvp.Value.heartDisease,
                    none = kvp.Value.none
                });
            }

            foreach (Donate ad in result)
            {
                if ((ad.prefferedName == login.UserName) && (ad.nic == login.Password))
                {
                    FirebaseResponse ret = await client.GetAsync("donatedata/" + ad.donateId);
                    Donate temp = new Donate();
                    temp.donateId = ad.donateId;
                    temp.title = ad.title;
                    temp.firstName = ad.firstName;
                    temp.lastName = ad.lastName;
                    temp.middleName = ad.middleName;
                    temp.prefferedName = ad.prefferedName;
                    temp.dob = ad.dob;
                    temp.gender = ad.gender;
                    temp.nic = ad.nic;
                    temp.addLine1 = ad.addLine1;
                    temp.addLine2 = ad.addLine2;
                    temp.city = ad.city;
                    temp.province = ad.province;
                    temp.postalCode = ad.postalCode;
                    temp.email = ad.email;
                    temp.telephone = ad.telephone;
                    temp.mobile = ad.mobile;
                    temp.prefContact = ad.prefContact;
                    temp.donateType = ad.donateType;
                    temp.hiv = ad.hiv;
                    temp.asc = ad.asc;
                    temp.diabetes = ad.diabetes;
                    temp.kidneyDisease = ad.kidneyDisease;
                    temp.heartDisease = ad.heartDisease;
                    temp.none = ad.none;

                    return Ok(temp);
                }
            }
            return BadRequest();
        }
    }
}
