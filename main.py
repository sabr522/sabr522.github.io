from flask import Flask, jsonify
from flask_cors import CORS
from groq import Groq
import re
import json

app = Flask(__name__)
cors = CORS(app, origins='*') 
client = Groq(api_key="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",)

# list of employees for manager's sidebar dropdown
@app.route("/api/dropdown", methods=['GET'])
def dropdown():
    with open("dropdown.txt", "r") as f:
        dropdown = f.read()
        return dropdown
    
# list of teams and scores
@app.route("/api/teamscores", methods=['GET'])
def teamscores():
    with open("score.txt", "r") as f:
        teamscores = f.read()
        return teamscores

# AI Prompt 1: Sorting the staff into teams for collaborative learning
@app.route("/api/group_generation", methods=['GET'])
def ai_group_generation():
    with open("mock_data.txt", "r") as f:
        prompt = f.read()

    with open("Group_generated_format.txt", "r") as f:
        group_generated_format = f.read()

    group_generation = client.chat.completions.create(
        messages=[
            {"role": "user","content": prompt},
            {"role": "user","content": group_generated_format},
            {"role": "user","content": "Using the data in the prompt containing 20 individuals working in a company and their profiles, separate them into collaborative learning groups of around 5"},
            {"role": "user","content": "Take into consideration all factors, give a higher weightage in ensuring that the years of experience among teammates are balanced, and that as much as possible, they are from the same department."},
            {"role": "user","content": "For the group name, name them groups 1-4. For each staff, show only the name, department, years of experience, email. Present it in a JSON format using this format" + group_generated_format}
        ], 
        model="llama3-70b-8192",
    )

    response = group_generation.choices[0].message.content
    print(response)

    file = "C:\\Users\\user\\repos\\psa\\Group_generated.txt"
    with open(file, "w") as f:
        f.write(response)

    with open("Group_generated.txt", "r") as f:
        groupings = f.read()
    print(groupings)
    print(type(groupings))

    json_data = re.search(r'(\[\s*{.*}\s*\])', groupings, re.DOTALL).group(1)
    json_object = json.loads(json_data)
    return json_object

# AI Prompt 2: Generating individual strengths of a specific employee
@app.route("/api/indiv_stength", methods=['GET'])
def ai_indiv_stength():
    with open("mock_data.txt", "r") as f:
        prompt = f.read()

    with open("three_key_points_format.txt", "r") as f:
        three_key_points_format = f.read()

    username = "Esther Lee"

    three_key_points = client.chat.completions.create(
        messages=[
            {"role": "user","content": prompt},
            {"role": "user","content": "Search through the data for " + username},
            {"role": "user","content": "Identify 3 strong points that they can contribute in a team for their manager to view"},
            {"role": "user","content": "For each strongpoint, show only the point and description. Present it in a JSON format following this format strictly and remove any excess items" + three_key_points_format}
        ], 
        model="llama3-70b-8192",
    )

    response = three_key_points.choices[0].message.content
    print(response)

    file = "C:\\Users\\user\\repos\\psa\\three_key_points.txt"
    with open(file, "w") as f:
        f.write(response)

    with open("three_key_points.txt", "r") as f:
        strongpoints = f.read()
    print(strongpoints)
    print(type(strongpoints))


    json_object = json.loads(strongpoints)
    return json_object
 
# AI Prompt 3: Recommendation system of courses for a specific employee
@app.route("/api/indiv_courses", methods=['GET'])
def ai_indiv_courses():
    username = "David Chen"
    with open("mock_data.txt", "r") as f:
        prompt = f.read()

    with open("Courses_available.txt","r") as f:
        course = f.read()

    with open("course_generated_formate.txt", "r") as f:
        course_generated_formate = f.read()

    Course_generated = client.chat.completions.create(
        messages=[
            {"role": "user","content": prompt},
            {"role": "user","content": course},
            {"role": "user","content": course_generated_formate},
            {"role": "user","content": "Using the data in the prompt look at " + username + "courses completed and their professional Interests, taking into consideration all factors"},
            {"role": "user","content": "Using data from " + course + "suggest 2 suitable courses that they have not take before."},
            {"role": "user","content": "Present it in a JSON format using this format only" + course_generated_formate}
        ], 
        model="llama3-70b-8192",
    )

    response = Course_generated.choices[0].message.content
    print(response)

    file = "C:\\Users\\user\\repos\\psa\\Course_generated.txt"
    with open(file, "w") as f:
        f.write(response)

    with open("Course_generated.txt", "r") as f:
        recommendedcourses = f.read()
    print(recommendedcourses)
    print(type(recommendedcourses))

    json_object = json.loads(recommendedcourses)
    return json_object


if __name__=="__main__":
    app.run(debug=True, port=8080)