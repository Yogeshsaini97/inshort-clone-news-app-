import React, { Component } from 'react'
import Loading from './Components/Loading';
import Innernews from './Innernews';
import PropTypes from 'prop-types';


export default class News extends Component {
     
   static defaultProps={
     country:"in",
     category:"general"
   }

   static propTypes={
     country:PropTypes.string,
     category:PropTypes.string

   }
    




   
        
    constructor()
    {
        super();
        this.state={
            articles:[],
            page:1,
            loading:false
        }
        
    }

     updatenews=async ()=>
    {
      let newurl=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=542cb7d827e04bbbb754a855d6d6fa80&page=${this.state.page}&pageSize=9`;
      this.setState({loading:false})
      let data=await fetch(newurl);
      let parseddata=await data.json();
      this.setState(
        {
         articles:parseddata.articles,
         totalresults:parseddata.totalResults,
         loading:true
        }
      )
    }



    async componentDidMount()
    {
      this.updatenews();
    
}

prevfunc=async ()=>{
console.log("prev")

// let newurls=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=542cb7d827e04bbbb754a855d6d6fa80&page=${this.state.page}&pageSize=9`;
// this.setState({loading:false})
// let data=await fetch(newurls);
// let parseddata=await data.json();
// console.log(parseddata);
// this.setState(
//   {
//     page:this.state.page - 1,
//     articles:parseddata.articles,
//     loading:true
//   }
// )

this.setState(
  {
    page:this.state.page - 1
  }
)
this.updatenews();


  
}

 nextfunc=async ()=>
{
  if(!(Math.ceil(this.state.totalresults/9 - 1)<this.state.page))
  {
  //   let newurls=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=542cb7d827e04bbbb754a855d6d6fa80&page=${this.state.page}&pageSize=9`;
  //   this.setState({loading:false})
    
  // let data=await fetch(newurls);
  // let parseddata=await data.json();
  // console.log(parseddata);
  // this.setState(
  //   {
  //     page:this.state.page + 1,
  //     articles:parseddata.articles,
  //     loading:true
  //   }
  // )
  this.setState(
    {
      page:this.state.page +1
    }
  )
  
  console.log("inside else");
  }
  this.updatenews();

  

}

  render() {
    return (
      <>

     { (this.state.loading)?
      <div className="container my-5">
        <h1 className="container my-5">Today,s '' Top Headlines!!!!</h1>
        <div className="row ">
          {this.state.articles.map((element) => {
            return (
              <>
              
              <div className="col-md-4 my-5" key={element.url}>
                <Innernews
                  url={element.url}
                  title={
                    element.title != null ? element.title.slice(0, 40) : ""
                  }
                  imageurl={element.urlToImage}
                  description={
                    element.description != null
                      ? element.description.slice(0, 88)
                      : "Paragraphs are medium-sized units of writing, longer than sentences, but shorter than sections. "
                  }
                />
              </div>
          
          </>
            );
          })}
        </div>
        <div className="d-flex justify-content-between">
          <button type="button" disabled={this.state.page<1}  onClick={this.prevfunc} className="btn btn-dark ">
            previous
          </button>
          <button type="button" disabled={Math.ceil(this.state.totalresults/9 - 1)<this.state.page}   onClick={this.nextfunc} className="btn btn-dark">
            Next{" "}
          </button>
        </div>
      </div>:<Loading/>


        }
        </>
    );
  }
}
