from flask import Flask, render_template, request
import smtplib
from email.message import EmailMessage

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
        username = data['username']
        email = data["email"]
        message = data["message"]
        send_mail(username, email, message)
        return render_template("/thank-you.html", name=data['username'])
    else:
        return "Something went wrong! Please try again later."


def send_mail(username, mail, message):
    email = EmailMessage()
    email['from'] = mail
    email['to'] = 'ashikurt77@gmail.com'
    email['subject'] = f"{username} through tusher.herokuapp.com"
    email.set_content(message)

    with smtplib.SMTP(host='smtp.gmail.com', port=587) as smtp:
        smtp.ehlo()
        smtp.starttls()
        smtp.login("pylearner77@gmail.com", "Ashikurt77")
        smtp.send_message(email)
        print("Email Sent!")