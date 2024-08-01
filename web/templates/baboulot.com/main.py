from flask import Flask, render_template

app = Flask(__name__,template_folder='',static_folder='') #No Change on template and static folder locations - make it root

@app.route('/')
def index():
    return render_template('index.html')

if __name__ =='__main__':
    app.run(debug=True)