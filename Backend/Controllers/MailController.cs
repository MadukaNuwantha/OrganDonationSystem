using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using OrganDonorSystem.Models;
using System.Net;
using System.Net.Mail;
using System.Web.Helpers;

namespace OrganDonorSystem.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MailController : ControllerBase
    {
        [HttpPost]
        public async Task<IActionResult> SendMail(Mail mail)
        {
            using SmtpClient email = new SmtpClient
            {
                DeliveryMethod = SmtpDeliveryMethod.Network,
                UseDefaultCredentials = false,
                EnableSsl = true,
                Host = "smtp.gmail.com",
                Port = 587,
                Credentials = new NetworkCredential("orgdonlk@gmail.com", "organdonation412")
            };

            try
            {
                email.Send("orgdonlk@gmail.com", mail.email, mail.subject, mail.body);
                return Ok();
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
            //WebMail.Send(mail.email, mail.subject, mail.body, null, null, null, true, null, null, null, null, null, null);
            //return Ok();
        }
    }
}
