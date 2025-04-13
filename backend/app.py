from flask import Flask, jsonify, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Allows cross-origin requests from React

@app.route('/api/triangle', methods=['GET'])
def get_triangle():
    # Example: read the 'rows' parameter
    rows = int(request.args.get('rows', 5))
    triangle = pascal_triangle(rows)
    return jsonify(triangle)

def pascal_triangle(n):
    if n <= 0:
        return []
    triangle = [[1]]
    for i in range(1, n):
        row = [1]
        for j in range(1, i):
            row.append(triangle[i-1][j-1] + triangle[i-1][j])
        if i > 0:
            row.append(1)
        triangle.append(row)
    return triangle

if __name__ == '__main__':
    app.run(debug=True)
