import React , {useState} from "react";
import "./editprofile.css";
import swal from 'sweetalert';
import courseService from "../courseContainer";

function Editinstructorprofile() {
    const [email , setemail] = useState("");
    const [minibiography , setminibiography] = useState("");
    const [emailerror , setemailerror] = useState("");
    const [minibiographyerror , setminibiographyerror] = useState("");

    const [data , setdata] = useState({
        email : "",
        minibiography : ""
    })

    async function submit(){
      //e.preventdefault(e);
      if (data.email.length === 0){
        setemailerror(true);
      }
      else{
        setemailerror(false);
      }
      if (data.minibiography.length === 0){
        setminibiographyerror(true);
      }
      else{
        setminibiographyerror(false);
      }
      if (data.minibiography.length !== 0 || data.email.length !== 0 ){
        swal({
          title: "Do you want to save the changes?",
          icon: "warning",
          buttons: true,
          dangerMode: true,
        })
        .then(async (willDelete) => {
          if (willDelete) {
            swal("your mini biography has been updated", {
              icon: "success",
            });
          }
          const res = await courseService.changeEmailorBiography('638cbacd72d0b673c0e33e9a',data);
        });
      }
    }
  const handleChange = (e, type)=>{
      let temp = {... data};
      temp[type] = e.target.value;
      if(type === 'minibiography')
        setminibiographyerror(false);
        if(type === 'minibiography')
        setemailerror(false);
      setdata(temp);
  }
  return (
    <div className="login-box">
        <h2>Edit mini biography</h2>
        <form>
        <div className="user-box ">
                <input type="text" name="" required="" onChange={(e)=>{handleChange(e,'email')}}/>
                <label>Email</label>
            </div>
            <div>
                {emailerror?<label className = "l1">Email field required</label>:""}
                <div className="form-floating mb-3" />
            </div>
            <div className="form-floating mb-3" />
            <div className="user-box text-center p-2 my-2 bg-light">
                <textarea onChange={(e)=>{handleChange(e,'minibiography')}}className="form-control" style={{height: '100px'}} placeholder='Type new biography here'></textarea>
                <label htmlFor="floatingTextarea2">Type new biography here</label>
            </div>
            <div>
                {minibiographyerror?<label className = "l1">Minibiography field required</label>:""}
                <div className="form-floating mb-3" />
            </div>
            <a href="#" onClick={(e)=>submit()}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Submit
            </a>
        </form>
    </div>
  );
}
export default Editinstructorprofile;