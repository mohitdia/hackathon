import bai


# Create the request. All the configuration parameters from the web app are available through the API request object
rag_request = bai.RAGCompletionRequest(
    workspace_id=9,  # provided through Dev Portal
    query="how do i create a custom alert",
    n_documents=5,
    temperature=0.0,
    top_p=0.99,
    system_prompt="answer in all CAPS"
)

api_base = 'https://betaai.collins.com'
api_key = '500a9f061eaf808870af5f4be2b9cc14'

rag_completion = bai.RAGCompletion.create(rag_request, api_base=api_base, api_key=api_key)

print(rag_completion.answer)
# print(rag_completion.documents)
# print(rag_completion.query)
# print(rag_completion.params)