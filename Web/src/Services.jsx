import http from "./http-common";

class Service {
    AdminLogin(data){
        return http.post("Admin/login",data);  //OK
    }
    AdminRegister(data){
        return http.post("Admin",data); //OK
    }

    //Donate
    DonateFetch(){
        return http.get("Donate"); //OK
    }

    DonateView(idnumber){
        return http.get(`Donate/${idnumber}`); //OK
    }

    DonateReg(data){
        return http.post("Donate",data);
    }

    //Patients
    PatientFetch(){
        return http.get("Patient"); //OK
    }

    PatientView(idnumber){
        return http.get(`Patient/${idnumber}`); //OK
    }

    PatientAdd(data){
        return http.post('Patient', data)
    }

    PatientDelete(idnumber){
        return http.delete(`Patient/${idnumber}`); //OK
    }

    updatePatient(data){
        return http.put('Patient', data); //OK
    }

    patientFetchByOrgon(data){
        return http.get(`Patient/byorgon/${data}`);
    }

    //Orgon
    orgonReg(data){
        return http.post("Orgon", data);
    }

    orgonFetch(){
        return http.get("Orgon")
    }

    //Mail
    sendMail(data){
        return http.post("Mail", data)
    }

    //Comments
    commentFetch(){
        return http.get("Comment");
    }

    commentPost(data){
        return http.post("Comment", data);
    }

    deleteComment(commentId){
        return http.delete(`Comment/${commentId}`);
    }
}

export default new Service();
