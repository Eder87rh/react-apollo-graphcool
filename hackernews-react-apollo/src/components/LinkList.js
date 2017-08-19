import React, { Component } from 'react'
import { graphql, gql } from 'react-apollo'
import Link from './Link'

class LinkList extends Component {

    render() {
        // LOADING
        if (this.props.allLinksQuery && this.props.allLinksQuery.loading) {
            return <div>Loading</div>
        }

        // ERROR
        if (this.props.allLinksQuery && this.props.allLinksQuery.error) {
            return <div>Error</div>
        }

        // SUCCESS
        const linksToRender = this.props.allLinksQuery.allLinks
        console.log(linksToRender)
        return (
            <div>
                {linksToRender.map(link => (
                    <Link key={link.id} link={link} />
                ))}
            </div>
        )
    }

}

// 1
const ALL_LINKS_QUERY = gql`
# 2
query AllLinksQuery {
  allLinks {
    id
    createdAt
    url
    description
  }
}
`

// 3
export default graphql(ALL_LINKS_QUERY, { name: 'allLinksQuery' })(LinkList)