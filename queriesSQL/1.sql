SELECT
    r.recruit_id,
    r.full_name,
    a.assignment_id,
    a.assigned_at,
    a.ended_at,
    u.unit_name
FROM recruits r
LEFT JOIN assignments a
    ON r.recruit_id = a.recruit_id
LEFT JOIN military_units u
    ON a.unit_id = u.unit_id
ORDER BY r.full_name;