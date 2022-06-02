namespace OrganDonorSystem.Models
{
    public class Patient
    {
        public string patientId { get; set; }
        public string userName { get; set; }
        public int age { get; set; }
        public string dob { get; set; }
        public string gender { get; set; }
        public string email { get; set; }
        public string hospital { get; set; }
        public string gardName { get; set; }
        public string gardContact { get; set; }
        public string gardRel { get; set; }
        public string gardAddress { get; set; }
        public string organ { get; set; }
        public string bloodType { get; set; }
        public string organSize { get; set; }
        public string condition { get; set; }
        public DateTime dateOfReg { get; set; }
        public string waitingList { get; set; }

        public int points { get; set; }
        public string medicalurgency { get; set; }
        public int distance { get; set; }
        public string compatability { get; set; }
        public string oneyearpost { get; set; }
    }
}
