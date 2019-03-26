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
            subtopic: false,
            message: ''
            
        }
    }

    handleSubmit = e => {
        //validation here
        console.log('form submitted!')
        console.log('name: ', this.state.name)
        console.log('email: ', this.state.email)
        console.log('topic: ', this.state.topic)
        console.log('subtopic: ', this.state.subtopic)
        console.log('message: ', this.state.message)

        e.preventDefault()
    }

    onChangeInput = e => {
        const { name, value } = e.target
        this.setState(prevState => ({ ...prevState, [name]: value }))

        if(name === 'topic')
            if(value === 'evaluation'){
                console.log('evaualion detected!')
                this.setState({subtopic: value})
            }
            else{
                this.setState({subtopic: false})
            }

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
                        placeholder="CHOOSE TOPIC"
                        onChange={this.onChangeInput}
                    >   
                        <option value="" disabled selected>CHOOSE TOPIC</option>
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

                    {this.state.subtopic?
                        <select 
                            className="subtopic__input"
                            name="subtopic"
                            onChange={this.onChangeInput}

                        >
                            <option value="" disabled selected>CHOOSE PROJECT TYPE</option>

                            {mData[2].subtopic.options.map((item, i)=>{
                                return(
                                    <option 
                                        key={`select_project_type${i}`}
                                        value={item.value}
                                    >
                                        {item.label}
                                    </option>  
                                )
                            })}
                        </select>
                    :null}

                    <textarea
                        className='input4'
                        name='message'
                        placeholder='MESSAGE...'
                        value={this.state.message}
                        onChange={this.onChangeInput}

                    />

                </form>
                
                <div className="button__container">
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