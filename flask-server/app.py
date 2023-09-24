from flask import Flask
import os


app = Flask(__name__)

@app.route("/")
def hello():
    return "Hello"


if __name__ == "__main__":
    app.run(port=os.environ["FLASK_PORT"], debug=True)