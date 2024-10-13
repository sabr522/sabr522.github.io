import os
from groq import Groq
import json
import re

client = Groq(api_key="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",)

# Prompt 1: Sorting the staff into teams for collaborative learning
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
print(json_object)