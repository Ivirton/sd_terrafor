resource "aws_cloudwatch_log_group" "app_log_group" {
  name              = var.log_group_name
  retention_in_days = 14
}

resource "aws_cloudwatch_log_stream" "app_log_stream" {
  name           = var.log_stream_name
  log_group_name = aws_cloudwatch_log_group.app_log_group.name
}
