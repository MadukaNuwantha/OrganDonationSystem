import React from 'react';
import Services from '../Services';
import './common.css';
import img1 from './Image/2640191.jpg';

class Comments extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            data: [],
            comment:[]
        }
    }

    async componentDidMount(){
        Services.commentFetch().then(({data})=>{
            this.setState({data: data});
            console.log(data);
        });
    }

    async commentPost(){
        Services.commentPost(this.state.comment)
            .then(({data})=>{
            console.log(data);
        }).catch(({response})=>{
            console.log(response);
        });
    }

    async handle(e){
        const newData = {...this.state.comment};
        newData[e.target.id] = e.target.value;
        newData["time"] = "2000-01-01T00:00:00.000Z";
        newData["commentId"] = "0";
        this.setState({comment: newData});
        console.log(newData);
    }

    /*async deleteComment(commentId){
        if(window.confirm('Delete this comment?')){
            Services.deleteComment(commentId)
                .then(({data})=>{
                console.log(data);
                Services.commentFetch().then(({data})=>{
                    this.setState({data: data});
                    console.log(data);
                });
            }).catch(({response})=>{
                console.log(response);
            });
        }
    }*/

    render(){
        const {data} = this.state;

        function deleteComment(commentId){
            if(window.confirm('Delete this comment?')){
                Services.deleteComment(commentId)
                    .then(({data})=>{
                    console.log(data);
                    refreshpage();
                }).catch(({response})=>{
                    console.log(response);
                });
            }
        }

        function refreshpage(){
            window.location.replace("/comments");
        }

        function printData(){
            if(data.length == 0 || data === undefined){
                return(
                    <div className="alert alert-warning my-3" role="alert">
                        <p className='text-center'>No Data</p>
                    </div>
                )
            }
            else{
                return(
                    data.map((data) =>
                    <div className="alert alert-info my-3" role="alert" key={data.commentId}>
                        <div className='d-flex justify-content-between'>
                            <blockquote className="alert-heading blockquote">
                                <h6>{ data.name }</h6>
                            </blockquote>
                            <button type="button" className="btn-close" onClick={() => deleteComment(data.commentId) }></button>
                        </div>
                        <figcaption className="text-end blockquote-footer">
                            <cite title="Source Title">{ (data.time).toString().split('T')[0] }</cite>
                        </figcaption>
                        <hr/>
                        <p>{data.comment}</p>
                    </div>
                    )
                );
            }   
        }

        return(
            <div className='container'>
                <div className='bgss'> 
                    <div className='d-flex justify-content-center mb-5'>
                        <img src={img1} alt='' className='imgs'></img>
                        <br/><br/><br/>
                    </div>
                    <div>
                        <div className='d-flex justify-content-center mb-5'>
                            <h2>Tell us your ideas.</h2>
                            <hr/>
                        </div>

                        <div className='' style={{ padding: "0% 25% 0% 25%"}}>
                            <form className='bg-body rounded py-3 px-3 shadow' onSubmit={() => this.commentPost()}>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
                                    <input type="text" className="form-control" id="name" onChange={(e) => this.handle(e)}/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputPassword1" className="form-label">Comment</label>
                                    <textarea className="form-control" id="comment" cols={5} onChange={(e) => this.handle(e)}></textarea>
                                </div>
                                <div>
                                    <button type="submit" className="btn btn-primary">Submit</button>
                                </div>
                            </form>
                        </div>

                        <div className='' style={{ padding: "50px 20% 0% 20%"}}>
                            { printData() }
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Comments;