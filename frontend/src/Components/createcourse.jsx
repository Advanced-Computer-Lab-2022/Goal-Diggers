import React from 'react';
import courseService from '../courseContainer';
import { useState } from 'react';
<link rel="stylesheet" href="index.css" />

function Createcourse(props) {

    const url ="http://localhost:44349/api/MainMenu/Create";
    const [titlee , settitlee] = useState("");
    const [price , setprice] = useState("");
    const [summaryy , setsummaryy] = useState("");
    const [totalhours, sethours] = useState("");
    const [titleofsubtitle, settitle] = useState("");
    const [summaryofsubtitle, setsummary] = useState("");
    const [video , setvideo] = useState("");
    const [videotitle , setvideotitle] = useState("");
    const [image , setimage] = useState("");
    
    const [texterror , settexterror] = useState("");
    const [titleerror , settitleerror] = useState("");
    const [videoerror, setvideoerror] = useState("");

    const [data , setdata] = useState({
        titlee : "",
        price : "",
        summaryy : "",
        image : "",
        sections : []
    })

    

    const [sections, setSections] = useState([]);
    const [videos,setVideos] = useState([]);
    //const [images,setImages] = useState([]);

    async function submit(){
         //e.preventdefault(e);
         if (data.titlee.length === 0 ||data.price.length === 0 ||data.summaryy.length === 0 || data.image.length ===0)settexterror(true)

         else{
            settexterror(false);
            data.sections = sections;
            console.log(data);
            const res = await courseService.addCourse(data);
         }
    }

    function handle(e){
        const newdata = {...data}
        newdata[e.target.id] = e.target.value
        setdata(newdata);
        console.log(newdata);
    }

    function addtitle(){
        let section = {total : totalhours, title : titleofsubtitle, summary : summaryofsubtitle ,  videos : videos} 
        
        if (totalhours <= 0 || titleofsubtitle.length ===0 || summaryofsubtitle.length === null){
            settitleerror (true);
        }
        else{
            sections.push(section)
            settitleerror(false);
            sethours("");
            settitle("");
            setsummary("");
            setVideos([]);
        }
        console.log(sections);
    }

    function addvideo(){
        let Video = {vod : video , vodtitle : videotitle}
        if (video.length === 0 || videotitle.length === 0)setvideoerror(true)
        else{
            videos.push(Video)
            setvideoerror(false);
            setvideo("");
            setvideotitle("");
        }
        console.log(videos);
    }

    // function ImageUpload (){
    //     let Image = {img : image}
    //     images.push(Image)
    //     console.log(images);
    // }

    return (
       <div className="row">
            <div className="col-sm-3">
            </div>
            <div className="col-sm-6">
            <div className='text-center p-2 my-2 bg-light' style={{border : '1px solid black', borderRadius : '15px'}}>
                <div class="form-floating mb-3">
                <input onChange={(e)=>handle(e)} id = "titlee" value={data.titlee} type="text" class="form-control" placeholder="Title" />
                <label for="floatingInput">Title</label>
                </div>
                <div>
                {texterror?<label className = "l1">You must fill it</label>:""}
                <div class="form-floating mb-3" />
                </div>
                <div class="form-floating mb-3">
                <input onChange={(e)=>handle(e)} id = "price" value={data.price} type="number" class="form-control" min={0} placeholder="Price" />
                <label for="price">Price</label>
                </div>
                <div>
                {texterror?<label className = "l1">You must fill it</label>:""}
                <div class="form-floating mb-3" />
                </div>
                <div class="form-floating mb-3">
                <textarea onChange={(e)=>handle(e)} value={data.summaryy} name="summary" id="summaryy" class="form-control" placeholder="Leave a comment here"  style={{height: '100px'}}></textarea>
                <label for="floatingTextarea2">Summry</label>
                </div>
                <div>
                {texterror?<label className = "l1">You must fill it</label>:""}
                <div class="form-floating mb-3" />
                </div>
                {/* <label for="input" id='label'><input onChange={(e) => setimage(e.target.files[0])} type="file" name="cover" id="input" accept="image/*" />Upload Course Cover</label> */}
                <div class="form-floating mb-3">
                <input onChange={(e)=>handle(e)} id = "image" value={data.image} type="text" class="form-control" placeholder="image"/>
                <label for="img">Image Link</label>
                </div>
                <div>
                {texterror?<label className = "l1">You must fill it</label>:""}
                <div class="form-floating mb-3" />
                </div>
                <div class="form-floating mb-3" />
                <div class="form-floating mb-3">
                <input onChange={(e)=>{settitle(e.target.value)}} id = "titleofsubtitle" value={data.titleofsubtitle} type="text" class="form-control" placeholder="Subtitle" />
                <label for="floatingInput">Subtitle {sections.length+1}</label>
                </div>
                <div class="form-floating mb-3">
                <input onChange={(e)=>{setvideotitle(e.target.value)}} id = "videotitle" value={data.videotitle} type="text" class="form-control" placeholder="Video Title" />
                <label for="floatingInput">Video Title {videos.length+1} for section {sections.length+1}</label>
                </div>
                <div>
                {videoerror?<label className = "l1">You must fill it</label>:""}
                <div class="form-floating mb-3" />
                </div>
                <div class="form-floating mb-3">
                <input onChange={(e)=>{setvideo(e.target.value)}} id = "video" value={data.video} type="text" class="form-control"  placeholder="Video" />
                <label for="floatingInput">Video Link</label>
                </div>
                <div>
                {videoerror?<label className = "l1">You must fill it</label>:""}
                <div class="form-floating mb-3" />
                </div>
                <button className='btn btn-primary' onClick={()=>addvideo()}>Add Video</button>
                <div class="form-floating mb-3" />
                <div class="form-floating mb-3">
                <input onChange={(e)=>{sethours(e.target.value)}} id = "totalhours" value={data.totalhours} type="number" class="form-control" min={0} placeholder="Totalhours" />
                <label for="price">Totalhours</label>
                </div>
                <div>
                {titleerror?<label className = "l1">You must fill it</label>:""}
                <div class="form-floating mb-3" />
                </div>
                <div class="form-floating mb-3">
                <textarea onChange={(e)=>{setsummary(e.target.value)}} id = "summaryofsubtitle" value={data.summaryofsubtitle} class="form-control" placeholder="Leave a comment here" style={{height: '100px'}}></textarea>
                <label for="floatingTextarea2">Summry of Subtitle</label>
                </div>
                <div>
                {titleerror?<label className = "l1">You must fill it</label>:""}
                <div class="form-floating mb-3" />
                </div>
                <button className='btn btn-primary' onClick={()=>addtitle()}>Add Subtitle</button>
                <div class="form-floating mb-3" />
                <div class="form-floating mb-3" />
                
                <button className='btn btn-primary' onClick={(e)=>submit()}>Create Course</button>
            </div>
            </div>
       </div>       
    )

}
 
export default Createcourse;