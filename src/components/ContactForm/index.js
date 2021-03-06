
import React, { Component } from 'react'
import './../../css/shared.scss'
import './../../css/form.scss'
import mData from './topics.json'
import axios from 'axios'


class index extends Component {
    constructor(props){
        super(props)
        this.state = {
            name: '',
            email: '',
            topic: '',
            subtopic: null,
            subtopicValue: null, 
            message: '',
            
            namePassed: null,
            emailPassed: null,
            topicPassed: null,
            subtopicPassed: null,
            messagePassed: null,
        }
    }

    validate = e => {
        const { name, value } = e.target

        if(name === 'name'){
            if(value.length > 0){
                this.setState({namePassed: true})
            } else {
                this.setState({namePassed: false})
            }
        }
        
        else if(name === 'email'){
            if(value.length > 8 && 
                value.includes('@') && 
                value.includes('.')
            ){
                this.setState({emailPassed: true})
            } else {
                this.setState({emailPassed: false})
             }
        }
        
        else if(name === 'topic'){
            if(value){
                this.setState({topicPassed: true})
            } else {
                this.setState({topicPassed: false})                
            }
        }
        
        else if(this.state.topic === 'evaluation' && name === 'subtopic'){
            if(value){
                console.log('subtopic value: ', this.state.subtopicPassed)
                this.setState({subtopicPassed: value})                
            } else {
                this.setState({subtopicPassed: false})
            }
        }
        
        else if(name === 'message') {
            if(value) {
                this.setState({messagePassed: true})  
            } else {
                this.setState({messagePassed: false}) 
            }
        }
        e.preventDefault()
    }

    handleSubmit = e => {
        e.preventDefault()
        if(
            (
            this.state.namePassed === true &&
            this.state.emailPassed === true &&
            this.state.topicPassed === true &&
            this.state.messagePassed === true &&
            this.state.topic !== 'evaluation') ||
            (
            this.state.namePassed === true &&
            this.state.emailPassed === true &&
            this.state.topicPassed === true &&
            this.state.messagePassed === true &&
            this.state.subtopic !== true && 
            this.state.subtopic !== false &&
            this.state.subtopic !== '')
        ){
            console.log('form submitted')
            console.log('name: ', this.state.name)
            console.log('email: ', this.state.email)
            console.log('topic: ', this.state.topic)
            console.log('subtopic: ', this.state.subtopic)
            console.log('message: ', this.state.message)
            
            
            const payload = {
                name: this.state.name,
                email: this.state.email,
                topic: this.state.topic,
                subtopic: this.state.subtopic,
                message: this.state.message
            }
            console.log('posting this: ', payload)
            const that = this;
            axios.post('http://5c8b9025a0bb650014f03b2b.mockapi.io/contact_forms', payload,
            {
                'Content-Type': 'application/json'
            },)
            .then(function (response) {
                console.log(response);
                that.setState({
                    messageSent: true,
                    name: '',
                    email: '',
                    topic: '',
                    subtopic: false,
                    message: ''
                })
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    else {

        if(!this.state.name){
            this.setState({
                namePassed: false,            
            })
        } 
        
        if (!this.state.email){
            this.setState({
                emailPassed: false,            
            })
        }
        
        if (!this.state.topic) {
            this.setState({
                topicPassed: false,            
            })
        }
        
        if(!this.state.subtopic) {
            this.setState({
                subtopicPassed: false,            
            })
        } 

        if(!this.state.message) {
            this.setState({
                messagePassed: false,            
            })
        }
    }

     
    }

    onChangeInput = e => {
        
        const { name, value } = e.target
        this.setState(prevState => ({ ...prevState, [name]: value }))
        
        if(name === 'topic') 
        {
            if(value === 'evaluation'){
                this.setState({subtopic: true})
            }
            else{
                this.setState({subtopic: false})
          }
        }

        e.preventDefault();
    }

    render() {
        return (
            <section className="contact">
                <h1>{this.props.title}</h1>
                <form 
                    name="contact-form"
                    className={this.state.subtopic?'contact__form form__extended':'contact__form'}
                    action="/"
                >
                    <input 
                        className = {this.state.namePassed === false?'input__name input__validation__fail':'input__name'}
                        type='text' 
                        name='name' 
                        value={this.state.name} 
                        onChange={this.onChangeInput}
                        placeholder='ENTER YOUR NAME'
                        onBlur = {this.validate}
                        required
                    /> 

                    <input 
                        className={this.state.emailPassed === false?'input__email input__validation__fail':'input__email'}
                        type='email' 
                        name='email' 
                        value={this.state.email} 
                        onChange={this.onChangeInput}
                        onBlur={this.validate}
                        placeholder='ENTER YOUR EMAIL'
                        required
                    /> 
                    
                    <select
                        className={this.state.topicPassed === false?'input__topic input__validation__fail':'input__topic'}
                        name='topic'
                        placeholder="CHOOSE TOPIC"
                        onChange={this.onChangeInput}
                        onBlur={this.validate}
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
                            className={this.state.subtopicPassed === false?'subtopic__input input__validation__fail':'subtopic__input'}
                            name="subtopic"
                            value={this.state.subtopicValue}
                            onChange={this.onChangeInput}
                            onBlur={this.validate}
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
                        className={this.state.messagePassed === false?'input__message input__validation__fail':'input__message'}                        
                        name='message'
                        placeholder='MESSAGE...'
                        value={this.state.message}
                        onChange={this.onChangeInput}
                        onBlur={this.validate}
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