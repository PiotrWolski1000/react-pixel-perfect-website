import React, { Component } from 'react'
import './../../css/shared.scss'
import './../../css/form.scss'
import mData from './topics.json'

class index extends Component {
    constructor(props){
        super(props)
        this.state = {
            name: '',
            email: '',
            topic: '',
            message: ''
        }
    }
    handleSubmit = e => {
        //validation here
        console.log('form submitted!')
        console.log('name: ', this.state.name)
        console.log('email: ', this.state.email)
        console.log('topic: ', this.state.topic)
        console.log('message: ', this.state.message)

        e.preventDefault()
    }

    onChangeInput = e => {
        const { name, value } = e.target
        this.setState(prevState => ({ ...prevState, [name]: value }))

        e.preventDefault();
    }

    render() {
        return (
            <section className="contact">
                <h1>Contact</h1>
                <form 
                    name="contact-form"
                    className='contact__form'
                >
                    <input 
                        className = 'input1'
                        type='text' 
                        name='name' 
                        value={this.state.name} 
                        onChange={this.onChangeInput}
                        placeholder='ENTER YOUR NAME'
                        required
                    /> 

                    <input 
                        className='input2'
                        type='email' 
                        name='email' 
                        value={this.state.email} 
                        onChange={this.onChangeInput}
                        placeholder='ENTER YOUR EMAIL'
                        required
                    /> 
                    
                    <select
                        className='input3'
                        name='topic'
                    >
                        {mData.map((item, i)=>{
                            return(
                            <option 
                                key={`contact_option_${i}`}
                                value={item.value}
                            >
                                {item.label}
                            </option>  
                            )
                        })}
                    </select>

                    <textarea
                        className='input4'
                        name='message'
                        placeholder='MESSAGE...'
                        value={this.state.message}
                        onChange={this.onChangeInput}

                    />

                </form>
                
                <div className="centralized">
                    <button 
                        className="btn primary"
                        type="submit"
                        onClick={this.handleSubmit}
                        form="contact-form"
                    >
                        submit
                    </button>
                </div>
            </section>
        );
    }
}

export default index;