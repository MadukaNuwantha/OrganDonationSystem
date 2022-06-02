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
    public class PatientController : ControllerBase
    {
        IFirebaseClient client;

        public PatientController()
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
            Dictionary<string, Patient> data = new Dictionary<string, Patient>();
            FirebaseResponse response = await client.GetAsync("patientdata");

            if (response.StatusCode == System.Net.HttpStatusCode.OK)
                data = JsonConvert.DeserializeObject<Dictionary<string, Patient>>(response.Body);

            List<Patient> result = new List<Patient>();
            foreach (KeyValuePair<string, Patient> kvp in data)
            {
                result.Add(new Patient()
                {
                    patientId = kvp.Key,
                    userName = kvp.Value.userName,
                    age = kvp.Value.age,
                    dob = kvp.Value.dob,
                    gender = kvp.Value.gender,
                    email = kvp.Value.email,
                    hospital = kvp.Value.hospital,
                    gardName = kvp.Value.gardName,
                    gardContact = kvp.Value.gardContact,
                    gardRel = kvp.Value.gardRel,
                    gardAddress = kvp.Value.gardAddress,
                    organ = kvp.Value.organ,
                    bloodType = kvp.Value.bloodType,
                    organSize = kvp.Value.organSize,
                    condition = kvp.Value.condition,
                    dateOfReg = kvp.Value.dateOfReg,
                    waitingList = kvp.Value.waitingList,
                    points = kvp.Value.points,
                    medicalurgency = kvp.Value.medicalurgency,
                    distance = kvp.Value.distance,
                    compatability = kvp.Value.compatability,
                    oneyearpost = kvp.Value.oneyearpost
                });
            }

            int n = result.Count;
            for (int i = 1; i < n; i++)
            {
                string keypatientId = result[i].patientId;
                string keyuserName = result[i].userName;
                int keyage = result[i].age;
                string keydob = result[i].dob;
                string keygender = result[i].gender;
                string keyemail = result[i].email;
                string keyhospital = result[i].hospital;
                string keygardName = result[i].gardName;
                string keygardContact = result[i].gardContact;
                string keygardRel = result[i].gardRel;
                string keygardAddress = result[i].gardAddress;
                string keyorgan = result[i].organ;
                string keybloodType = result[i].bloodType;
                string keyorganSize = result[i].organSize;
                string keycondition = result[i].condition;
                DateTime keydateOfReg = result[i].dateOfReg;
                string keywaitingList = result[i].waitingList;
                int keypoints = result[i].points;
                string keymedicalurgency = result[i].medicalurgency;
                int keydistance = result[i].distance;
                string keycompatability = result[i].compatability;
                string keyoneyearpost = result[i].oneyearpost;

                int j = i - 1;

                while (j >= 0 && result[j].points < keypoints)
                {
                    result[j + 1].patientId = result[j].patientId;
                    result[j + 1].userName = result[j].userName;
                    result[j + 1].age = result[j].age;
                    result[j + 1].dob = result[j].dob;
                    result[j + 1].gender = result[j].gender;
                    result[j + 1].email = result[j].email;
                    result[j + 1].hospital = result[j].hospital;
                    result[j + 1].gardName = result[j].gardName;
                    result[j + 1].gardContact = result[j].gardContact;
                    result[j + 1].gardRel = result[j].gardRel;
                    result[j + 1].gardAddress = result[j].gardAddress;
                    result[j + 1].organ = result[j].organ;
                    result[j + 1].bloodType = result[j].bloodType;
                    result[j + 1].organSize = result[j].organSize;
                    result[j + 1].condition = result[j].condition;
                    result[j + 1].dateOfReg = result[j].dateOfReg;
                    result[j + 1].waitingList = result[j].waitingList;
                    result[j + 1].points = result[j].points;
                    result[j + 1].medicalurgency = result[j].medicalurgency;
                    result[j + 1].distance = result[j].distance;
                    result[j + 1].compatability = result[j].compatability;
                    result[j + 1].oneyearpost = result[j].oneyearpost;

                    --j;
                }
                result[j + 1].patientId = keypatientId;
                result[j + 1].userName = keyuserName;
                result[j + 1].age = keyage;
                result[j + 1].dob = keydob;
                result[j + 1].gender = keygender;
                result[j + 1].email = keyemail;
                result[j + 1].hospital = keyhospital;
                result[j + 1].gardName = keygardName;
                result[j + 1].gardContact = keygardContact;
                result[j + 1].gardRel = keygardRel;
                result[j + 1].gardAddress = keygardAddress;
                result[j + 1].organ = keyorgan;
                result[j + 1].bloodType = keybloodType;
                result[j + 1].organSize = keyorganSize;
                result[j + 1].condition = keycondition;
                result[j + 1].dateOfReg = keydateOfReg;
                result[j + 1].waitingList = keywaitingList;
                result[j + 1].points = keypoints;
                result[j + 1].medicalurgency = keymedicalurgency;
                result[j + 1].distance = keydistance;
                result[j + 1].compatability = keycompatability;
                result[j + 1].oneyearpost = keyoneyearpost;
            }

            return Ok(result);
        }

        [HttpGet("{idnumber}")]
        public async Task<ActionResult> GetOnce(string idnumber)
        {
            Dictionary<string, Patient> data = new Dictionary<string, Patient>();
            FirebaseResponse response = await client.GetAsync("patientdata");

            if (response.StatusCode == System.Net.HttpStatusCode.OK)
                data = JsonConvert.DeserializeObject<Dictionary<string, Patient>>(response.Body);

            List<Patient> result = new List<Patient>();
            foreach (KeyValuePair<string, Patient> kvp in data)
            {
                result.Add(new Patient()
                {
                    patientId = kvp.Key,
                    userName = kvp.Value.userName,
                    age = kvp.Value.age,
                    dob = kvp.Value.dob,
                    gender = kvp.Value.gender,
                    hospital = kvp.Value.hospital,
                    email = kvp.Value.email,
                    gardName = kvp.Value.gardName,
                    gardContact = kvp.Value.gardContact,
                    gardRel = kvp.Value.gardRel,
                    gardAddress = kvp.Value.gardAddress,
                    organ = kvp.Value.organ,
                    bloodType = kvp.Value.bloodType,
                    organSize = kvp.Value.organSize,
                    condition = kvp.Value.condition,
                    dateOfReg = kvp.Value.dateOfReg,
                    waitingList = kvp.Value.waitingList,
                    points = kvp.Value.points,
                    medicalurgency = kvp.Value.medicalurgency,
                    distance = kvp.Value.distance,
                    compatability = kvp.Value.compatability,
                    oneyearpost = kvp.Value.oneyearpost
                });

            }

            Patient pan = new Patient();
            foreach (Patient patient in result)
            {
                if (patient.patientId == idnumber)
                {
                    pan.patientId = patient.patientId;
                    pan.userName = patient.userName;
                    pan.age = patient.age;
                    pan.dob = patient.dob;
                    pan.gender = patient.gender;
                    pan.email = patient.email;
                    pan.hospital = patient.hospital;
                    pan.gardName = patient.gardName;
                    pan.gardContact = patient.gardContact;
                    pan.gardRel = patient.gardRel;
                    pan.gardAddress = patient.gardAddress;
                    pan.organ = patient.organ;
                    pan.bloodType = patient.bloodType;
                    pan.organSize = patient.organSize;
                    pan.condition = patient.condition;
                    pan.dateOfReg = patient.dateOfReg;
                    pan.waitingList = patient.waitingList;
                    pan.points = patient.points;
                    pan.medicalurgency = patient.medicalurgency;
                    pan.distance = patient.distance;
                    pan.compatability = patient.compatability;
                    pan.oneyearpost = patient.oneyearpost;
                }
            }
            return Ok(pan);
        }

        [HttpPost]
        public async Task<ActionResult> Post(Patient patient)
        {
            int point = 0;
            if (patient.medicalurgency == "High")
            {
                point += 15;
            }
            else if (patient.medicalurgency == "Medium")
            {
                point += 10;
            }
            else if (patient.medicalurgency == "Low")
            {
                point += 5;
            }

            if (patient.compatability == "High")
            {
                point += 15;
            }
            else if (patient.compatability == "Medium")
            {
                point += 10;
            }
            else if (patient.compatability == "Low")
            {
                point += 5;
            }

            if (patient.oneyearpost == "High")
            {
                point += 15;
            }
            else if (patient.oneyearpost == "Medium")
            {
                point += 10;
            }
            else if (patient.oneyearpost == "Low")
            {
                point += 5;
            }

            if (patient.distance < 50)
            {
                point += 15;
            }
            else if (patient.distance >= 50 || patient.distance <= 100)
            {
                point += 10;
            }
            else if (patient.distance > 100)
            {
                point += 5;
            }

            patient.points = point;

            string IDGen = Guid.NewGuid().ToString("N");
            FirebaseResponse response = await client.SetAsync("patientdata/" + IDGen, patient);

            if (response.StatusCode == System.Net.HttpStatusCode.OK)
            {
                return Ok(response);
            }
            else
            {
                return BadRequest(response);
            }
        }

        [HttpPut]
        public async Task<ActionResult> Update(Patient patient)
        {
            string idnumber = patient.patientId;
            patient.patientId = "";
            FirebaseResponse response = await client.SetAsync("patientdata/" + idnumber, patient);

            if (response.StatusCode == System.Net.HttpStatusCode.OK)
            {
                return Ok(response);
            }
            else
            {
                return BadRequest(response);
            }
        }

        [HttpDelete("{idnumber}")]
        public async Task<ActionResult> Delete(string idnumber)
        {
            FirebaseResponse response = await client.DeleteAsync("patientdata/" + idnumber);
            if (response.StatusCode == System.Net.HttpStatusCode.OK)
            {
                return Ok(response);
            }
            else
            {
                return BadRequest(response);
            }
        }

        [HttpGet("byorgon/{orgon}")]
        public async Task<ActionResult> ByOrgon(string orgon)
        {
            Dictionary<string, Patient> data = new Dictionary<string, Patient>();
            FirebaseResponse response = await client.GetAsync("patientdata");

            if (response.StatusCode == System.Net.HttpStatusCode.OK)
                data = JsonConvert.DeserializeObject<Dictionary<string, Patient>>(response.Body);

            List<Patient> res = new List<Patient>();
            foreach (KeyValuePair<string, Patient> kvp in data)
            {
                res.Add(new Patient()
                {
                    patientId = kvp.Key,
                    userName = kvp.Value.userName,
                    age = kvp.Value.age,
                    dob = kvp.Value.dob,
                    gender = kvp.Value.gender,
                    email = kvp.Value.email,
                    hospital = kvp.Value.hospital,
                    gardName = kvp.Value.gardName,
                    gardContact = kvp.Value.gardContact,
                    gardRel = kvp.Value.gardRel,
                    gardAddress = kvp.Value.gardAddress,
                    organ = kvp.Value.organ,
                    bloodType = kvp.Value.bloodType,
                    organSize = kvp.Value.organSize,
                    condition = kvp.Value.condition,
                    dateOfReg = kvp.Value.dateOfReg,
                    waitingList = kvp.Value.waitingList,
                    points = kvp.Value.points,
                    medicalurgency = kvp.Value.medicalurgency,
                    distance = kvp.Value.distance,
                    compatability = kvp.Value.compatability,
                    oneyearpost = kvp.Value.oneyearpost
                });
            }

            List<Patient> result = new List<Patient>();
            foreach (Patient kvp in res)
            {
                if ((kvp.organ).Trim().ToLower() == (orgon).Trim().ToLower())
                {
                    result.Add(new Patient()
                    {
                        patientId = kvp.patientId,
                        userName = kvp.userName,
                        age = kvp.age,
                        dob = kvp.dob,
                        gender = kvp.gender,
                        email = kvp.email,
                        hospital = kvp.hospital,
                        gardName = kvp.gardName,
                        gardContact = kvp.gardContact,
                        gardRel = kvp.gardRel,
                        gardAddress = kvp.gardAddress,
                        organ = kvp.organ,
                        bloodType = kvp.bloodType,
                        organSize = kvp.organSize,
                        condition = kvp.condition,
                        dateOfReg = kvp.dateOfReg,
                        waitingList = kvp.waitingList,
                        points = kvp.points,
                        medicalurgency = kvp.medicalurgency,
                        distance = kvp.distance,
                        compatability = kvp.compatability,
                        oneyearpost = kvp.oneyearpost
                    });
                }
            }

            int n = result.Count;
            for (int i = 1; i < n; i++)
            {
                string keypatientId = result[i].patientId;
                string keyuserName = result[i].userName;
                int keyage = result[i].age;
                string keydob = result[i].dob;
                string keygender = result[i].gender;
                string keyemail = result[i].email;
                string keyhospital = result[i].hospital;
                string keygardName = result[i].gardName;
                string keygardContact = result[i].gardContact;
                string keygardRel = result[i].gardRel;
                string keygardAddress = result[i].gardAddress;
                string keyorgan = result[i].organ;
                string keybloodType = result[i].bloodType;
                string keyorganSize = result[i].organSize;
                string keycondition = result[i].condition;
                DateTime keydateOfReg = result[i].dateOfReg;
                string keywaitingList = result[i].waitingList;
                int keypoints = result[i].points;
                string keymedicalurgency = result[i].medicalurgency;
                int keydistance = result[i].distance;
                string keycompatability = result[i].compatability;
                string keyoneyearpost = result[i].oneyearpost;

                int j = i - 1;

                while (j >= 0 && result[j].points < keypoints)
                {
                    result[j + 1].patientId = result[j].patientId;
                    result[j + 1].userName = result[j].userName;
                    result[j + 1].age = result[j].age;
                    result[j + 1].dob = result[j].dob;
                    result[j + 1].gender = result[j].gender;
                    result[j + 1].email = result[j].email;
                    result[j + 1].hospital = result[j].hospital;
                    result[j + 1].gardName = result[j].gardName;
                    result[j + 1].gardContact = result[j].gardContact;
                    result[j + 1].gardRel = result[j].gardRel;
                    result[j + 1].gardAddress = result[j].gardAddress;
                    result[j + 1].organ = result[j].organ;
                    result[j + 1].bloodType = result[j].bloodType;
                    result[j + 1].organSize = result[j].organSize;
                    result[j + 1].condition = result[j].condition;
                    result[j + 1].dateOfReg = result[j].dateOfReg;
                    result[j + 1].waitingList = result[j].waitingList;
                    result[j + 1].points = result[j].points;
                    result[j + 1].medicalurgency = result[j].medicalurgency;
                    result[j + 1].distance = result[j].distance;
                    result[j + 1].compatability = result[j].compatability;
                    result[j + 1].oneyearpost = result[j].oneyearpost;

                    --j;
                }
                result[j + 1].patientId = keypatientId;
                result[j + 1].userName = keyuserName;
                result[j + 1].age = keyage;
                result[j + 1].dob = keydob;
                result[j + 1].gender = keygender;
                result[j + 1].email = keyemail;
                result[j + 1].hospital = keyhospital;
                result[j + 1].gardName = keygardName;
                result[j + 1].gardContact = keygardContact;
                result[j + 1].gardRel = keygardRel;
                result[j + 1].gardAddress = keygardAddress;
                result[j + 1].organ = keyorgan;
                result[j + 1].bloodType = keybloodType;
                result[j + 1].organSize = keyorganSize;
                result[j + 1].condition = keycondition;
                result[j + 1].dateOfReg = keydateOfReg;
                result[j + 1].waitingList = keywaitingList;
                result[j + 1].points = keypoints;
                result[j + 1].medicalurgency = keymedicalurgency;
                result[j + 1].distance = keydistance;
                result[j + 1].compatability = keycompatability;
                result[j + 1].oneyearpost = keyoneyearpost;
            }

            return Ok(result);
        }

        //Login
        [HttpPost("login")]
        public async Task<ActionResult> Login(Login login)
        {
            Dictionary<string, Patient> data = new Dictionary<string, Patient>();
            FirebaseResponse response = await client.GetAsync("patientdata");

            if (response.StatusCode == System.Net.HttpStatusCode.OK)
                data = JsonConvert.DeserializeObject<Dictionary<string, Patient>>(response.Body);

            List<Patient> result = new List<Patient>();
            foreach (KeyValuePair<string, Patient> kvp in data)
            {
                result.Add(new Patient()
                {
                    patientId = kvp.Key,
                    userName = kvp.Value.userName,
                    age = kvp.Value.age,
                    dob = kvp.Value.dob,
                    gender = kvp.Value.gender,
                    hospital = kvp.Value.hospital,
                    email = kvp.Value.email,
                    gardName = kvp.Value.gardName,
                    gardContact = kvp.Value.gardContact,
                    gardRel = kvp.Value.gardRel,
                    gardAddress = kvp.Value.gardAddress,
                    organ = kvp.Value.organ,
                    bloodType = kvp.Value.bloodType,
                    organSize = kvp.Value.organSize,
                    condition = kvp.Value.condition,
                    dateOfReg = kvp.Value.dateOfReg,
                    waitingList = kvp.Value.waitingList,
                    points = kvp.Value.points,
                    medicalurgency = kvp.Value.medicalurgency,
                    distance = kvp.Value.distance,
                    compatability = kvp.Value.compatability,
                    oneyearpost = kvp.Value.oneyearpost
                });
            }

            foreach (Patient ad in result)
            {
                if ((ad.userName == login.UserName) && (ad.email == login.Password))
                {
                    FirebaseResponse ret = await client.GetAsync("patientdata/" + ad.patientId);
                    Patient temp = new Patient();

                    temp.patientId = ad.patientId;
                    temp.userName = ad.userName;
                    temp.age = ad.age;
                    temp.dob = ad.dob;
                    temp.gender = ad.gender;
                    temp.email = ad.email;
                    temp.hospital = ad.hospital;
                    temp.gardName = ad.gardName;
                    temp.gardContact = ad.gardContact;
                    temp.gardRel = ad.gardRel;
                    temp.gardAddress = ad.gardAddress;
                    temp.organ = ad.organ;
                    temp.bloodType = ad.bloodType;
                    temp.organSize = ad.organSize;
                    temp.condition = ad.condition;
                    temp.dateOfReg = ad.dateOfReg;
                    temp.waitingList = ad.waitingList;
                    temp.points = ad.points;
                    temp.medicalurgency = ad.medicalurgency;
                    temp.distance = ad.distance;
                    temp.compatability = ad.compatability;
                    temp.oneyearpost = ad.oneyearpost;

                    return Ok(temp);
                }
            }
            return BadRequest();
        }
    }
}
