import os
from groq import Groq
import json

client = Groq(api_key="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",)

username = "David Chen"

# Prompt 3: Recommend staff suitable course that they have not done yet
with open("mock_data.txt", "r") as f:
    prompt = f.read()

with open("Courses_available.txt","r") as f:
    course = f.read()

Course_generated = client.chat.completions.create(
    messages=[
        {"role": "user","content": prompt},
        {"role": "user","content": course},
        {"role": "user","content": "Using the data in the prompt look at " + username + "courses completed and their professional Interests, taking into consideration all factors"},
        {"role": "user","content": "Using data from " + course + "suggest 2 suitable courses that they have not take before."},
        {"role": "user","content": "Present it in a JSON format only."}
    ], 
    model="llama3-70b-8192",
)

response = Course_generated.choices[0].message.content
print(response)

file = "C:\\Users\\user\\repos\\psa\\Course_generated.txt"
with open(file, "w") as f:
    f.write(response)

print("completed ai")

# Open prompt results
with open("Course_generated.txt", "r") as f:
    recommendedcourses = f.read()
print(recommendedcourses)
print(type(recommendedcourses))

# Convert string to a Python object (list of dicts)
json_object = json.loads(recommendedcourses)

# Output the cleaned JSON
formatted_json = json.dumps(json_object, indent=2)
print(formatted_json)
