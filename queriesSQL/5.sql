SELECT
    r.full_name,
    c.title,
    g.score
FROM grades g
JOIN course_enrollments ce
    ON g.enrollment_id = ce.enrollment_id
JOIN recruits r
    ON ce.recruit_id = r.recruit_id
JOIN courses c
    ON ce.course_id = c.course_id
WHERE g.score = (
    SELECT MAX(g2.score)
    FROM grades g2
    JOIN course_enrollments ce2
        ON g2.enrollment_id = ce2.enrollment_id
    WHERE ce2.course_id = ce.course_id
);