from flask import Flask, request, jsonify
from flask_restful import Resource, Api
import sqlite3
from flask_sqlalchemy import SQLAlchemy
from flask_marshmallow import Marshmallow
import os

app = Flask(__name__)
api = Api(app)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///C:\\Users\\Guilherme\\Documents\\LabsoftWorkTogether\\Backend\\DataBase\\Tables\\db.talents'
db = SQLAlchemy(app)
ma = Marshmallow(app)

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

# Product Schema
class ProdutSchema(ma.Schema):
    class Meta:
        fields = ('name', 'contact', 'specialty', 'price', 'status')

# Init Schema
product_schema = ProdutSchema()
products_schema = ProdutSchema(many=True)

# Create a Talent
class Talents(Resource):
    def get(self):
        all_talents = Talent.query.all()
        result = products_schema.dump(all_talents)
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

        return product_schema.jsonify(new_talent)

class DeleteTalents(Resource):
    def delete(self, contact):
        talent_search = Talent.query.get(contact)
        db.session.delete(talent_search)
        db.session.commit()

        return product_schema.jsonify(talent_search)


api.add_resource(Talents, '/talents')
api.add_resource(DeleteTalents, '/talents/<contact>')

if __name__ == '__main__':
    app.run(debug = True)