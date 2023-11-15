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
from flask import Flask, render_template, jsonify, request
from flask_cors import CORS
import bai
 
# instance of flask application
app = Flask(__name__)
 
# home route that returns below text when root url is accessed
#  manually copying files to this static directory
@app.route("/", methods= ['GET'])
def hello_world():
    return render_template('index.html')

@app.route('/getanswer', methods = ['GET']) 
def disp(): 
    if request.method == 'GET':
        query = request.args['ragQuery']
    # Create the request. All the configuration parameters from the web app are available through the API request object
    rag_request = bai.RAGCompletionRequest(
        workspace_id=9,  # provided through Dev Portal
        query=query,
        n_documents=5,
        temperature=0.0,
        top_p=0.99,
        system_prompt="answer in all CAPS"
    )

    api_base = 'https://betaai.collins.com'
    api_key = '500a9f061eaf808870af5f4be2b9cc14'

    rag_completion = bai.RAGCompletion.create(rag_request, api_base=api_base, api_key=api_key)

    print(rag_completion.answer)
  
    return jsonify({'data': rag_completion.answer}) 

CORS(app)
 
if __name__ == '__main__':  
   app.run()




