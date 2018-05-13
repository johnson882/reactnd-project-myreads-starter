import React,{Component} from 'react'
import {Link} from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'


class SearchPage extends Component{


state = {
  books:[]
}
  // searches the API for a search term, then updates the search starter
  search = (event) => {
  //  update(event.target.value.trim())
  var test = event.target.value
  alert(test)

  //what to do? code: find difference between last onCHange call, if over 1.5 seconds then do a 
  // BooksAPI query with the finished input result. Exmple: art, wait 1.5 then API call.

  }

update = (query) => {

  BooksAPI.search(query).then()
}



  render(){
    return(


          <div className="search-books">
            <div className="search-books-bar">
            <Link className="close-search" to='/'/>
              <div className="search-books-input-wrapper">
                {



                  /*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
                <input type="text" placeholder="Search by title or author" onChange={this.search}/>

              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid">
              //  displays books in state with updated search/
              </ol>
            </div>
          </div>


    )//return

  }//render



}
export default SearchPage
