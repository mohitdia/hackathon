# from flask import Flask, jsonify

# app = Flask(__name__, static_folder='hackathon-ui/dist/hackathon-ui/browser', static_url_path="/")

# @app.route('/', defaults={'path': ''})
# # @app.route('/<path:path>')
# def catch_all(path):
#     return app.send_static_file("index.html")

# @app.route("/heartbeat")
# def heartbeat():
#     return jsonify({"status": "healthy"})


# import flast module
from flask import Flask, render_template
 
# instance of flask application
app = Flask(__name__)
 
# home route that returns below text when root url is accessed
#  manually copying files to this static directory
@app.route("/", methods= ['GET'])
def hello_world():
    return render_template('index.html')
 
if __name__ == '__main__':  
   app.run()

