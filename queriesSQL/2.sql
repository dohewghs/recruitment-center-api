SELECT
    i.instructor_id,
    i.full_name,
    COUNT(t.session_id) AS session_count
FROM instructors i
JOIN training_sessions t
    ON i.instructor_id = t.instructor_id
GROUP BY i.instructor_id, i.full_name
HAVING COUNT(t.session_id) > 5;