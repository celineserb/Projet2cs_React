import React, { useState } from 'react';
import axios from 'axios';
import './style/style.css';
import { Form, Input, InputNumber, Button, Select, Divider, message } from 'antd';

const { Option } = Select;

const SuperAdmin = () => {

    const [formLayout, setFormLayout] = useState('vertical');

    const formItemLayout =
    formLayout === 'vertical'
      ? {
          labelCol: { span: 4 },
          wrapperCol: { span: 14 },
        }
      : null;

      const buttonItemLayout =
    formLayout === 'vertical'
      ? {
          wrapperCol: { span: 14, offset: 4 },
        }
      : null;

    const [form] = Form.useForm();

    const onFinish = (values) => {
        const loading = document.getElementsByClassName("loading")[0];
        const sumbitBtn = document.getElementById("submitBtn");
        loading.hidden = false;
        sumbitBtn.disabled = true;
        axios({
            method: 'post',
            url: 'http://localhost:8100/users',
            data: {
                nom: values.nom,
                prenom: values.prenom,
                numeroTelephone: values.numeroTelephone,
                address: values.address,
                userName: values.userName,
                type: values.type,
            }
          }).then((response) => {
            if (response.status == 200) {
                axios({
                    method: 'post',
                    url: 'http://localhost:8005/signup',
                    data: {
                        email: values.email,
                        password: values.password,
                        idUser: response.data.idUser
                    }
                  }).then((response) => {
                    if (response.status == 201) {
                        message.success('Administrateur ajouté!');
                        form.resetFields();
                        loading.hidden = true;
                        sumbitBtn.disabled = false;
                    }
                  }, (error) => {
                    message.error('Un erreur est survenue!');
                    loading.hidden = true;
                    sumbitBtn.disabled = false;
                });
            }
          }, (error) => {
            message.error('Un erreur est survenue!');
            loading.hidden = true;
            sumbitBtn.disabled = false;
          });
          
      };
    
      const onFinishFailed = (errorInfo) => {
        message.error('Un erreur est survenue!');
      };

    return(
        <>
        <div style={{padding: "50px 100px"}}>
            <Form
            {...formItemLayout}
            form={form}
        id="adminForm"
      name="basic"
      
        layout={formLayout}
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      initialValues={{
        remember: true,
        layout: formLayout 
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >

        
        <Divider orientation="left"><h5 className="bolde">Informations de l'administrateur</h5> </Divider>
        
      <Form.Item
        label="Nom"
        name="nom"
        rules={[
          {
            required: true,
            message: 'Veuillez donner un nom!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Prénom"
        name="prenom"
        rules={[
          {
            required: true,
            message: 'Veuillez donner un prenom!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Téléphone"
        name="numeroTelephone"
        rules={[
          {
            type: 'number',
            required: true,
            message: 'Veuillez donner un numéro de téléphone!',
          },
        ]}
      >
        <InputNumber />
      </Form.Item>

      <Form.Item
        label="Adresse"
        name="address"
        rules={[
          {
            required: true,
            message: 'Veuillez donner une addresse!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Nom utilisateur"
        name="userName"
        rules={[
          {
            required: true,
            message: 'Veuillez donner un nom utilisateur!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Type"
        name="type"
        rules={[
          {
            required: true,
            message: 'Veuillez choisir un type!',
          },
        ]}
      >
        <Select
          placeholder="Selectionner un type d'administrateur"
          allowClear
        >
          <Option value="decision_maker">Decideur</Option>
          <Option value="agent_admin">Administrateur d'agents</Option>
          <Option value="account_admin">Administrateur de comptes</Option>
          <Option value="technical_admin">Administrateur technique</Option>
        </Select>
      </Form.Item>

      <br/> 

      <Divider orientation="left"><h5 className="bolde">Authentification de l'administrateur</h5> </Divider>
      

      <Form.Item
        label="Email"
        name="email"
        rules={[
          {
            type: 'email',
            required: true,
            message: 'Veuillez donner un email!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Mot de passe"
        name="password"
        rules={[
          {
            required: true,
            message: 'Veuillez donner un password!',
          },
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
          <br/>
        <Button id="submitBtn" type="primary" htmlType="submit">
            Ajouter
        </Button>

      </Form.Item>
    </Form>

        </div>

        <div className="loading" hidden>
            <div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div> 
        </div>
    </>
    );
}

export default SuperAdmin;