from flask import Flask, jsonify

app = Flask(__name__, static_folder='hackathon-ui/dist/hackathon-ui/browser', static_url_path="/")

@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def catch_all(path):
    return app.send_static_file("index.html")

@app.route("/heartbeat")
def heartbeat():
    return jsonify({"status": "healthy"})
