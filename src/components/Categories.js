import React, {Component} from 'react'

export class Categories extends Component{
    constructor(props){
        super(props)
        this.state = {
            categories: [
                {
                    key: 'all',
                    name: 'Всё'
                },
                {
                    key: 'programming',
                    name: 'программирование'
                },
                {
                    key: 'artistic literature' ,
                    name: 'художественная литература'
                },
                {
                    key:'science',
                    name: 'наука'
                },
                {
                    key: 'philosophy',
                    name: 'философия'
                }
            ]
        }
    }
    render() {
        return(
            <div className='categories'>
                {this.state.categories.map(el => (
                    <div key = {el.key} onClick ={() => this.props.chooseCategory(el.key)}>{el.name} </div>
                ))}
            </div>
        )
    }
}

export default Categories