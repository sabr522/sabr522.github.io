import os
from groq import Groq
import json
import re

client = Groq(api_key="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",)

username = "Esther Lee"

# Prompt 2: Generate strengths of individual employee 
with open("mock_data.txt", "r") as f:
    prompt = f.read()

three_key_points = client.chat.completions.create(
    messages=[
        {"role": "user","content": prompt},
        {"role": "user","content": "Search through the data for " + username},
        {"role": "user","content": "Identify 3 strong points that they can contribute in a team for their manager to view"},
        {"role": "user","content": "Present the 3 points in a JSON format."}
    ], 
    model="llama3-70b-8192",
)

response = three_key_points.choices[0].message.content
print(response)

file = "C:\\Users\\user\\repos\\psa\\three_key_points.txt"
with open(file, "w") as f:
    f.write(response)

print("completed ai")

# Open prompt results
with open("three_key_points.txt", "r") as f:
    strongpoints = f.read()
print(strongpoints)
print(type(strongpoints))

# Use regex to extract only the JSON-like structure
json_data = re.search(r'```(.*?)```', strongpoints, re.DOTALL).group(1).strip()

# Convert string to a Python object (list of dicts)
json_object = json.loads(json_data)
# print(json_object)

# Output the cleaned JSON
formatted_json = json.dumps(json_object, indent=2)
print(formatted_json)
