using System.ComponentModel.DataAnnotations;

namespace OrganDonorSystem.Models
{
    public class Donate
    {
        public string donateId { get; set; } //OK
        public string title { get; set; } //OK
        public string firstName { get; set; } //OK
        public string lastName { get; set; } //OK
        public string middleName { get; set; } //OK
        public string prefferedName { get; set; } //OK
        public string dob { get; set; } //OK
        public string gender { get; set; } //OK
        public string nic { get; set; } //OK
        public string addLine1 { get; set; } //OK
        public string addLine2 { get; set; } //OK
        public string city { get; set; } //OK
        public string province { get; set; }
        public int postalCode { get; set; } //OK
        public string email { get; set; } //OK
        public string telephone { get; set; } //OK
        public string mobile { get; set; } //OK
        public string prefContact { get; set; }
        public string donateType { get; set; } //OK
        public string hiv { get; set; } //OK
        public string asc { get; set; } //OK
        public string diabetes { get; set; } //OK
        public string kidneyDisease { get; set; } //OK
        public string heartDisease { get; set; } //OK
        public string none { get; set; } //OK
    }
}
