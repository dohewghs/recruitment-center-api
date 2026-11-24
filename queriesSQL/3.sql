SELECT
    r.recruit_id,
    r.full_name,
    COUNT(DISTINCT ce.course_id) AS completed_courses
FROM recruits r
JOIN course_enrollments ce
    ON r.recruit_id = ce.recruit_id
WHERE ce.completed_at IS NOT NULL
GROUP BY r.recruit_id, r.full_name
HAVING COUNT(DISTINCT ce.course_id) >= 3;