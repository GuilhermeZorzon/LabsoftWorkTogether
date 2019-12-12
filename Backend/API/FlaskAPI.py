from flask import Flask, request, jsonify
from flask_restful import Resource, Api
import sqlite3
from flask_sqlalchemy import SQLAlchemy
from flask_marshmallow import Marshmallow
import os

app = Flask(__name__)
api = Api(app)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///C:\\Users\\Guilherme\\Documents\\LabsoftWorkTogether\\Backend\\DataBase\\Tables\\db.talents'
app.config['SQLALCHEMY_BINDS'] = {'two': 'sqlite:///C:\\Users\\Guilherme\\Documents\\LabsoftWorkTogether\\Backend\\DataBase\\Tables\\db.clients'}
db = SQLAlchemy(app)
ma = Marshmallow(app)

class Client(db.Model):
    __tablename__ = 'client'
    name = db.Column(db.String)
    contact = db.Column(db.String, primary_key=True)
    project = db.Column(db.String)
    price = db.Column(db.Integer)
    status = db.Column(db.String)

    def __init__(self, name, contact, project, price, status):
        self.name = name
        self.contact = contact
        self.project = project
        self.price = price
        self.status = status

# Client Schema
class ClientSchema(ma.Schema):
    class Meta:
        fields = ('name', 'contact', 'project', 'price', 'status')

# Init Schema
client_schema = ClientSchema()
clients_schema = ClientSchema(many=True)

# Create a Client
class Clients(Resource):
    def get(self):
        all_clients = Client.query.all()
        result = clients_schema.dump(all_clients)
        return jsonify(result)

    def post(self):
        name = request.json['name']
        contact = request.json['contact']
        project = request.json['project']
        price = request.json['price']
        status = request.json['status']
        
        new_client = Client(name, contact, project, price, status)

        db.session.add(new_client)
        db.session.commit()

        return client_schema.jsonify(new_client)

class DeleteClient(Resource):
    def delete(self, contact):
        talent_search = Client.query.get(contact)
        db.session.delete(talent_search)
        db.session.commit()

        return client_schema.jsonify(talent_search)

api.add_resource(Clients, '/clients')
api.add_resource(DeleteClient, '/clients/<contact>')

class Talent(db.Model):
    __tablename__ = 'talent'
    name = db.Column(db.String)
    contact = db.Column(db.String, primary_key=True)
    specialty = db.Column(db.String)
    price = db.Column(db.Integer)
    status = db.Column(db.String)

    def __init__(self, name, contact, specialty, price, status):
        self.name = name
        self.contact = contact
        self.specialty = specialty
        self.price = price
        self.status = status

# Talent Schema
class TalentSchema(ma.Schema):
    class Meta:
        fields = ('name', 'contact', 'specialty', 'price', 'status')

# Init Schema
talent_schema = TalentSchema()
talents_schema = TalentSchema(many=True)

# Create a Talent
class Talents(Resource):
    def get(self):
        all_talents = Talent.query.all()
        result = talents_schema.dump(all_talents)
        return jsonify(result)

    def post(self):
        name = request.json['name']
        contact = request.json['contact']
        specialty = request.json['specialty']
        price = request.json['price']
        status = request.json['status']
        
        new_talent = Talent(name, contact, specialty, price, status)

        db.session.add(new_talent)
        db.session.commit()

        return talent_schema.jsonify(new_talent)

class DeleteTalents(Resource):
    def delete(self, contact):
        talent_search = Talent.query.get(contact)
        db.session.delete(talent_search)
        db.session.commit()

        return talent_schema.jsonify(talent_search)


api.add_resource(Talents, '/talents')
api.add_resource(DeleteTalents, '/talents/<contact>')


if __name__ == '__main__':
    app.run(debug = True)