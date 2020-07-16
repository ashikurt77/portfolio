from flask import Flask, render_template, request

app = Flask(__name__)


@app.route('/')
@app.route('/home')
def home():
    return render_template("index.html")


@app.route("/<string:page_name>")
def navigator(page_name):
    return render_template(f"{page_name}.html")


@app.route('/submit', methods=['POST', 'GET'])
def form():
    if request.method == 'POST':
        data = request.form.to_dict()
        print(data)
        return render_template("/thank-you.html", name=data['username'])
    else:
        return "Something went wrong! Please try again later."
