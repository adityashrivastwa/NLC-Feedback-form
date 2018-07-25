import React,{Component} from 'react';
import axios from 'axios';
import img from './nav_logo.png';
import './App.css';
import {Button,Col,Container,Form,FormGroup,Input,Label,Row} from 'reactstrap';

class Feedback extends Component {
    state = {
        data:{},
        value:'',
        name:'',
        mobile:'',
        age:'',
        address:'',
        doctorName:'',
        feedback:''
        
    }
    componentWillMount = () => {
        axios.get('https://www.naviadoctors.com/visit_feedback/front_end_test')
        .then(res=>{
         // console.log(res.data.ratings)
         this.setState({data:res.data.ratings})
        })
      }
    
      handleChange = (event) => {
        // console.log(event.target.value);
        this.setState({value: event.target.value});
      }

      handleNameChange = (event) => {
          this.setState({name:event.target.value})
      }

      handleMobileNumberChange = (event) => {
        this.setState({mobile:event.target.value})
    }

    handleAgeChange = (event) => {
        this.setState({age:event.target.value})
    }

    handleAddressChange = (event) => {
        this.setState({address:event.target.value})
    }

    handleDoctorNameChange = (event) => {
        this.setState({doctorName:event.target.value})
    }

    handleFeedbackChange = (event) => {
        this.setState({feedback:event.target.value})
    }

    //For submitting the form

    handleSubmit = (event) => {
        event.preventDefault();
        alert('Your response have recorded in our database.Thanks for sharing!!!');
      }  

    render() {
        let array = [];
    
    for (var val in this.state.data) {
        array.push({"key": val, "value": this.state.data[val] })    
    }

    const options = array.map(opt => <option key={opt.key} value={opt.key}>{opt.value}</option>)

    console.log(array);


        return(
           <div className = "App">
             <Container>
                 <Row>
                     <Col sm={1}>
                     <img src={img} alt="logo" />
                     </Col>
                     <Col sm="8">
                     <h1 class="pulls right" >Patient's Feedback form</h1>
                     </Col>
                 </Row>
             </Container>
                     
           <Form onSubmit={this.handleSubmit}>
                <FormGroup row>
                    <Label for="Name" sm={2}>Name:</Label>
                    <Col sm={9}>
                    <Input type="text" value={this.state.name} onChange={this.handleNameChange}  />
                    </Col>
                </FormGroup >
                <FormGroup row>
                    <Label for="Mobile No." sm={2}>Mobile No.</Label>
                    <Col sm={9}>
                    <Input type="number" value={this.state.inputs} onChange={this.handleMobileNumberChange} />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="Age" sm={2}>Age</Label>
                    <Col sm={9}>
                    <Input type="number" value={this.state.inputs} onChange={this.handleAgeChange} />
                    </Col>
                </FormGroup>
                
                <FormGroup row>
                    <Label for="Address" sm={2}>Address:</Label>
                    <Col sm={9}>
                    <Input type="textarea" value={this.state.inputs} onChange={this.handleAddressChange} />
                    </Col>
                </FormGroup>

                <FormGroup row>
                    <Label for="Doctor's Name" sm={2}>Doctor's Name:</Label>
                    <Col sm={9}>
                    <Input type="text" value={this.state.inputs} onChange={this.handleDoctorNameChange} />
                    </Col>
                </FormGroup>

                <FormGroup row>
                    <Label for="Doctor's Rating" sm={2}>How was your session with the Doctor?Please Rate him</Label>
                    <Col sm={9}>
                    <Input type="select" name="select" value={this.state.value} onChange={this.handleChange}>
                        {options}
                    </Input>
                    </Col>
                </FormGroup>

                <FormGroup row>
                    <Label for="Feedback" sm={2}>How can we improve your visit in future ?</Label>
                    <Col sm={9}>
                    <Input type="textarea" value={this.state.feedback} onChange={this.handleFeedbackChange} />
                    </Col>
                </FormGroup>

                <FormGroup tag="fieldset" row>
                     <legend className="col-form-label col-sm-2">Gender</legend>
                     <Col sm={10}>
                     <FormGroup check>
                        <Label check>
                        <Input type="radio" name="radio2" />{' '}
                        Male
                        </Label>
                    </FormGroup>
                    
                    <FormGroup check>
                        <Label check>
                            <Input type="radio" name="radio2" />{' '}
                            Female
                        </Label>
                    </FormGroup>
                     </Col>
                </FormGroup>
            </Form> 
            <Button color="success" onClick={this.handleSubmit}>Submit</Button>       
    </div>
        )
    }
}

export default Feedback;