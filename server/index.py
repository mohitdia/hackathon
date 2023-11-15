# below approach relies on copying stuff from angular build to static folders
from flask import Flask, render_template, jsonify, request
from flask_cors import CORS
import bai
 
# instance of flask application
app = Flask(__name__)

@app.route('/getanswer', methods = ['GET']) 
def disp(): 
    if request.method == 'GET':
        query = request.args['ragQuery']
        query += ' ANSWER IN ALL CAPITAL LETTERS'
        print(query)
    # Create the request. All the configuration parameters from the web app are available through the API request object
    rag_request = bai.RAGCompletionRequest(
        workspace_id=9,  # provided through Dev Portal
        query=query,
        n_documents=3,
        temperature=0.1,
        top_p=0.99,
        system_prompt=""
    )

    api_base = 'https://betaai.collins.com'
    api_key = '500a9f061eaf808870af5f4be2b9cc14'

    rag_completion = bai.RAGCompletion.create(rag_request, api_base=api_base, api_key=api_key)

    print(rag_completion)

    print('Model answer' + rag_completion.answer)
  
    return jsonify({'data': rag_completion.answer}) 

CORS(app)
 
if __name__ == '__main__':  
   app.run()




