SELECT
    i.full_name,
    c.title,
    AVG(g.score) AS average_score
FROM grades g
JOIN instructors i
    ON g.instructor_id = i.instructor_id
JOIN course_enrollments ce
    ON g.enrollment_id = ce.enrollment_id
JOIN courses c
    ON ce.course_id = c.course_id
GROUP BY
    i.instructor_id,
    i.full_name,
    c.course_id,
    c.title
ORDER BY i.full_name;