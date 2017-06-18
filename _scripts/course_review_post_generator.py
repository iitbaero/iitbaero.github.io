import csv
import sys


class PostGenerator:

    def __init__(self, review):
        difficulty = {
            1: "Very Easy",
            2: "Easy",
            3: "Moderate",
            4: "Difficult",
            5: "Very difficult"
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

        t = review[0].split(" ")[0].split("/")

        self.date = t[2] + "-" + t[1] + "-" + t[0]
        self.author = review[1]
        self.course_code = review[2]
        self.course_name = review[3]
        self.course_iteration = review[4]
        self.course_instructor = review[5]

        self.course_difficulty = difficulty[int(review[6])]
        self.course_time_commitment = time_commitment[int(review[7])]
        self.course_grading = grading[int(review[8])]

        self.course_attendance_policy = review[9]
        self.course_assessments = review[10]

        self.course_prerequisites = review[11]
        self.course_syllabus = review[12]
        self.course_assessment_weightage = review[13]
        self.course_lecture_lab_review = review[14]
        self.course_assignments_projects = review[15]

        self.course_exams = review[16]
        self.comments = review[17]
        self.course_references = review[18]
        self.course_recommendation = recommendation[review[19]]

        self.post = []


    def generate_header(self):
        header = [
            "---",
            "layout: post",
            "title: \"" + self.course_code + ": " + self.course_name + "(Fall/Spring 201x)\"",
            "author: " + self.author, "description: \"Course Review: " + self.course_code + "\"",
            "modified: " + self.date,
            "tags: [Course Reviews, ]",
            "categories: []",
            "---"
        ]

        self.post.append("\n".join(header))

    def generate_content(self):
        content = [
            "**Course Instructor:** " + self.course_instructor,
            "**Course Difficulty:** " + self.course_difficulty,
            "**Time Commitment Required:** " + self.course_time_commitment,
            "**Grading:** " + self.course_grading, "**Attendance Policy:** " + self.course_attendance_policy,
            "**This Course has:** " + self.course_assessments, "**Prerequisites:** " + self.course_prerequisites,
            "**Topics Covered in the Course:**  \n" + self.course_syllabus,
            "**Weightage:**  \n" + self.course_assessment_weightage,
            "**How are the Assignments & Projects for this course?**  \n" + self.course_lecture_lab_review,
            "**How are the Exams (Quizzes, Mid-sem and End-sem) for this course?**  \n" + self.course_assignments_projects,
            "**Other Remarks:**  \n" + self.comments, "**References:**  \n" + self.course_references,
            "** How strongly would you recommend someone for taking this course (Not recommended-Strongly Recommended)?**  \n" + self.course_recommendation
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
        print("\n")
        print("=" * 80)
        print("\n")
        print("\n\n".join(self.post))
        print("\n")
        print("=" * 80)
        print("\n")

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
