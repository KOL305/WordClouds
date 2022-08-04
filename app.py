import base64
import io
from functools import wraps
from bson.objectid import ObjectId
from flask import Flask, render_template, jsonify, request, redirect, session, abort, flash
from flask_session import Session
from config import Config
import wordcloud
import matplotlib.pyplot as plt
import pandas as pd
import numpy as np
from PIL import Image

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
        textInput = request.files['text']
        maskInput = request.files['mask']
        colorInput = request.form['color']

        textFile = open('%s.txt' % textInput, 'r')
        text = textFile.read()
        print(text)
        textFile.close()
        print("Color",colorInput)

        mask = np.array(maskInput)

        wc = wordcloud.WordCloud(background_color="white",
        stopwords=wordcloud.STOPWORDS,
        mask=mask,
        width=mask.shape[1],
        height=mask.shape[0])
        wc.generate(text, collocations=False)
        
        img = io.BytesIO()
        plt.imshow(wc, interpolation="bilinear")
        plt.axis('off')
        plt.savefig(img, format='png')
        plt.close()
        img.seek(0)
        
        base64_string = "data:image/png;base64," + \
        str(base64.b64encode(img.getvalue()).decode('utf-8'))
        print("b64",base64_string)
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