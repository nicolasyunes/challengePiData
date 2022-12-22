import React,{useState} from 'react';
import { useForm } from 'react-hook-form';
import { addCharacter } from '../../features/character/characterSlice';
import {useDispatch} from 'react-redux';
import Form from 'react-bootstrap/Form';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';


export default function App() {
  const { register, handleSubmit,reset, formState: { errors } } = useForm({
    defaultValues: {
        name: "",
        height:"",
        hair_color:"",
        mass:"",
        eye_color:""

      }
  });
  
  const [modal,setModal] = useState(false);
  const dispatch = useDispatch();
  
  const toggle = () => setModal(!modal);

  const onSubmit = (data,e) => {
    e.preventDefault();
    dispatch(addCharacter(data));
    toggle();
    reset();
    
  }

  return(
    <div className="container-add">
    <button type="button" className="btn btn-outline-primary" onClick={toggle}>ADD+</button>

        <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Add new hero</ModalHeader>
        <ModalBody>
            <Form className="my-3 container col-9" onSubmit={handleSubmit(onSubmit)}>
                <Form.Control className="my-1" type="text"name="name" placeholder="Name" 
                {...register("name", {required: true, maxLength: 80})}
                aria-invalid={errors.name? "true" : "false"} /> 
                 
                <Form.Control  className="my-1" type="number" name="height" placeholder="Height (centimeters)" 
                {...register("height", {required: true,maxLength: 3})} 
                aria-invalid={errors.height? "true" : "false"} />
                <Form.Control  className="my-1" type="text" name="hair_color" placeholder="Hair Color" 
                {...register("hair_color", {required: true, minLength: 2, maxLength: 12})} 
                aria-invalid={errors.hair_color? "true" : "false"} />
                <Form.Control  className="my-1" type="text" name="mass" placeholder="Mass" 
                {...register("mass", {required: true, maxLength: 100})}
                aria-invalid={errors.mass? "true" : "false"}  />
                <Form.Control  className="my-1" type="text" name="eye_color" placeholder="Eye Color" 
                {...register("eye_color", {required: true, maxLength: 100})}
                aria-invalid={errors.eye_color? "true" : "false"}  />

                
                <Form.Control 
                className="d-flex justify-content-center btn btn-outline-primary my-4 " 
                value="Send" type="submit"/>
            </Form>
        </ModalBody>
        <ModalFooter>
          
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    
    </div>

  )
  
}