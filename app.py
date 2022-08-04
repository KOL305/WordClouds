import base64
import io
from functools import wraps
from bson.objectid import ObjectId
from flask import Flask, render_template, jsonify, request, redirect, session, abort, flash
from flask_session import Session
from config import Config
import wordcloud
import matplotlib
import pandas
import numpy

app = Flask("ATT Hackathon Project")
app.config.from_object(Config)
Session(app)

@app.route('/', methods=['GET','POST'])
def home():
    if request.method == 'GET':     
        return render_template('home.html')
    elif request.method == 'POST':
        pass

@app.route('/cloud', methods=['GET','POST'])
def cloud():
    if request.method == 'GET':     
        return render_template('home.html')
    elif request.method == 'POST':
        text = request.files['text']
        mask = request.files['mask']
        color = request.form['color']
        textFile = open('%s.txt' % text, 'r')
        print(textFile.read())
        print("Color",color)

        data = io.BytesIO()
        base64_string = "data:image/png;base64," + \
        str(base64.b64encode(mask.read()).decode('utf-8'))
        return {"filename": base64_string}

@app.route('/cloudexp', methods=['GET','POST'])
def cloudExp():
    if request.method == 'GET':     
        return render_template('home.html')
    elif request.method == 'POST':
        pass


if __name__ == "__main__":
    app.config['SECRET_KEY'] = '123qwi34iWge9era89F1393h3gwJ0q3'
    app.run(debug=True)