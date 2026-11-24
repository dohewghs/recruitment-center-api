WITH recruit_units AS (
    SELECT DISTINCT
        recruit_id,
        unit_id
    FROM assignments
)
SELECT
    u.unit_id,
    u.unit_name,
    AVG(g.score) AS average_score
FROM military_units u
JOIN recruit_units a
    ON u.unit_id = a.unit_id
JOIN recruits r
    ON a.recruit_id = r.recruit_id
JOIN course_enrollments ce
    ON r.recruit_id = ce.recruit_id
JOIN grades g
    ON ce.enrollment_id = g.enrollment_id
GROUP BY u.unit_id, u.unit_name
ORDER BY average_score DESC;