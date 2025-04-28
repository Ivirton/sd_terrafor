output "log_group_name" {
  value = aws_cloudwatch_log_group.app_log_group.name
}

output "log_stream_name" {
  value = aws_cloudwatch_log_stream.app_log_stream.name
}
