SELECT
    r.full_name,
    e.equipment_name,
    e.equipment_type,
    ei.quantity,
    ei.issued_at,
    u.unit_name
FROM equipment_issues ei
JOIN recruits r
    ON ei.recruit_id = r.recruit_id
JOIN equipment e
    ON ei.equipment_id = e.equipment_id
LEFT JOIN assignments a
    ON ei.assignment_id = a.assignment_id
LEFT JOIN military_units u
    ON a.unit_id = u.unit_id
WHERE ei.assignment_id IS NOT NULL
AND ei.training_id IS NULL
ORDER BY r.full_name;