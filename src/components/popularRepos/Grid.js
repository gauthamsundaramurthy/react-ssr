import React, { Component } from 'react'
import Home from "./Home"
import {fetchPopularRepos} from "./api"

class Grid extends Component {

  	state = {
      repos : [] ,
      loading: true,
    }
  
  	componentDidMount () {
    	this.fetchRepos(this.props.match.params.id)
  	}

  	componentDidUpdate (prevProps, prevState) {
    	if (prevProps.match.params.id !== this.props.match.params.id) {
      		this.fetchRepos(this.props.match.params.id)
    	}
  	}

  	fetchRepos = (lang) => {

    	this.setState(() => ({
      		loading: true
    	}))

    	fetchPopularRepos(lang)
      		.then((repos) => this.setState(() => ({
        		repos,
        		loading: false,
      		})))
  	}
  
  	render() {
		const { loading, repos } = this.state
		return (
			<>
				<Home />
				{loading ? <p> Loading....</p> : 
					<ul style={{display: 'flex', flexWrap: 'wrap'}}>
						{repos.map(({ name, owner, stargazers_count, html_url }) => (
							<li key={name} style={{margin: 30}}>
								<ul>
									<li><a href={html_url}>{name}</a></li>
									<li>@{owner.login}</li>
									<li>{stargazers_count} stars</li>
								</ul>
							</li>
						))}
					</ul>
				}
			</>	
    	)
  	}	
}

export default Grid