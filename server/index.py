# from flask import Flask, jsonify

# app = Flask(__name__, static_folder='hackathon-ui/dist/hackathon-ui/browser', static_url_path="/")

# @app.route('/', defaults={'path': ''})
# # @app.route('/<path:path>')
# def catch_all(path):
#     return app.send_static_file("index.html")

# @app.route("/heartbeat")
# def heartbeat():
#     return jsonify({"status": "healthy"})


# below approach relies on copying stuff from angular build to static folders
from flask import Flask, render_template, jsonify
 
# instance of flask application
app = Flask(__name__)
 
# home route that returns below text when root url is accessed
#  manually copying files to this static directory
@app.route("/", methods= ['GET'])
def hello_world():
    return render_template('index.html')

@app.route('/home/<int:num>', methods = ['GET']) 
def disp(num): 
  
    return jsonify({'data': num**2}) 
 
if __name__ == '__main__':  
   app.run()

