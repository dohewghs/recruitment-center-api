SELECT
    r.recruit_id,
    r.full_name,
    c.title,
    COUNT(sa.attendance_id) AS missed_sessions
FROM recruits r
JOIN course_enrollments ce
    ON r.recruit_id = ce.recruit_id
JOIN courses c
    ON ce.course_id = c.course_id
JOIN session_attendance sa
    ON ce.enrollment_id = sa.enrollment_id
WHERE c.title = $1
AND sa.attended = FALSE
GROUP BY
    r.recruit_id,
    r.full_name,
    c.title
HAVING COUNT(sa.attendance_id) > $2
ORDER BY missed_sessions DESC;