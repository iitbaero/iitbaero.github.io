import csv
import sys

from datetime import date


class PostGenerator:

    def __init__(self, review):
       
        interest = {
            1: "Extremely Monotonous and Boring",
            2: "Not very exciting",
            3: "Moderately Interesting",
            4: "Fairly Interesting",
            5: "Highly Interesting"
        }
        
        time_commitment = {
            1: "Low",
            2: "Moderate",
            3: "Moderate",
            4: "High",
            5: "Exhausting"
        }

        grading = {
            1: "Very chill",
            2: "Chill",
            3: "About right",
            4: "Strict",
            5: "Very Strict"
        }

        recommendation = {
            "1": "Not Recommended",
            "2": "Neutral",
            "3": "Neutral",
            "4": "Recommended",
            "5": "Strongly Recommended",
            "": "nil"
        }

        self.date = str(date.today())
        self.author = review[1]
        self.project_type = review[2]  #project type
        self.project_title = review[4]
        self.course_iteration = review[3]
        self.course_instructor = review[5]
        

        self.project_areas = review[6]
        self.project_interest = interest[int(review[7])]
        self.course_grading = grading[int(review[8])]
        self.course_time_commitment = review[9]

        self.course_assessments = review[10]
        self.project_description = review[11]

        self.course_prerequisites = review[12]
        self.comments = review[13]
        self.course_references = review[15]
        self.course_recommendation = recommendation[review[14]]

        self.post = []


    def generate_header(self):
        header = [
            "---",
            "layout: post",
            "title: \"" + self.project_type + ": " + self.project_title+ " (Fall/Spring 201x)\"",
            "author: " + self.author, "description: \"Project Review: " + self.project_type + "\"",
            "modified: " + self.date,
            "tags: ["+self.project_type+"]",
            #"categories: ["+self.project_type +"]",
            "---"
        ]

        self.post.append("\n".join(header))

    def generate_content(self):
        content = [
            "**Project Guide:** " + self.course_instructor,
            "**Time Commitment Required:** " + self.course_time_commitment,
            "**Project Description:**  \n"+self.project_description,
            "**Grading:** " + self.course_grading, 
            "**This Project has:** " + self.course_assessments, "**Recommended Prerequisites:** " + self.course_prerequisites,
       
            "**Other Areas of Interest of the Project Guide:** "+self.project_areas,
            "**Remarks by author:**  \n" + self.comments, "**Project References:**  \n" + self.course_references,
            "**How interesting was the project:** "+ self.project_interest,
            "**How strongly would you recommend someone for taking a similar project (Not recommended-Strongly Recommended)?**  \n" + self.course_recommendation
        ]

        self.post.append("\n\n".join(content))
        
    def generate_footer(self):
        footer = [
            "###### Disclaimer:The content of this website are opinions expressed by individual students. The "
            "information provided is for guidance purposes. Use the information at your own risk. "
        ]

        self.post.append("".join(footer))

    def generate_post(self):
        self.generate_header()
        self.generate_content()
        self.generate_footer()

    def save_post(self):
        f = open(self.date+"-"+self.author.replace(" ", "-")+"-"+self.project_type.replace(" ", "-")+ self.course_iteration.replace(" ", "-")+".md", "w")
        f.write("\n\n".join(self.post))
        f.close()

    def generate_and_save_post(self):
        self.generate_post()
        self.save_post()


def print_usage():
    print("Usage: python course_review_post_generator.py input_csv")


if __name__ == '__main__':
    if len(sys.argv) < 2:
        print_usage()
    else:
        review = []
        courses = []

        with open(sys.argv[1]) as csv_file:
            for row in csv.reader(csv_file):
                review.append(row)
                courses.append(row[3])

        courses = courses[1:]
        review = review[1:]

        for idx, value in enumerate(courses):
            print(str(idx) + ": " + value)

        print("\nChoose courses required (Separate numbers with a space): ")
        required = sys.stdin.readline()

        for i in required.split(" "):
            PostGenerator(review[int(i)]).generate_and_save_post()
